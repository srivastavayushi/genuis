import { auth } from "@clerk/nextjs";
import prismadb from "./prismadb";
import { date } from "zod";

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
  const { userId } = auth();

  if (!userId) return false;
  // find the userSubscription with userId
  const userSubscription =
    await prismadb.userSubscription.findUnique({
      where: {
        userId,
      },
      select: {
        stripeCurrentPeriodEnd: true,
        stripeCustomerId: true,
        stripeSubscriptionId: true,
        stripePriceId: true,
      },
    });

  if (!userSubscription) return false;

  // if subscription exists, is it valid? + 1 day of grace period
  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! +
      DAY_IN_MS >
      Date.now();

  return !!isValid;
};
