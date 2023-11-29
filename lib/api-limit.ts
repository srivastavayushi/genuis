import { auth } from "@clerk/nextjs";

import prismadb from "./prismadb";
import { MAX_FREE_COUNTS } from "@/constants";

export const increaseApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return;

  // check if there is document in db for its userApiLimit for this user
  const userApiLimit =
    await prismadb.userApiLimit.findUnique({
      where: {
        userId,
      },
    });

  // if userApiLimit exists update the count of
  // APILimit else create the userApiLimit and increase count to 1
  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: { userId: userId },
      data: {
        count: userApiLimit.count + 1,
      },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: {
        userId,
        count: 1,
      },
    });
  }
};

// check if user has passed the free count of API usage
export const checkApiLimit = async () => {
  const { userId } = auth();
  if (!userId) return false;

  const userApiLimit =
    await prismadb.userApiLimit.findUnique({
      where: { userId },
    });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS)
    return true;
  // block the user from using the API
  else false;
};

// get number of times user has used any service
export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) return 0;

  const userApiLimit =
    await prismadb.userApiLimit.findUnique({
      where: { userId },
    });

  if (!userApiLimit) return 0;

  return userApiLimit.count;
};
