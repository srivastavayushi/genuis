import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const settingsUrl = absoluteUrl("/settings");

export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user)
      return new NextResponse("Unauthorized", {
        status: 401,
      });

    // Find current user subscription based on currently logged in userId
    const userSubscription =
      await prismadb.userSubscription.findUnique({
        where: { userId },
      });

    // if there is a userSubscription then once user points to this
    // API route we dont want to create a checkout page instead we
    // want to redirect user to billing page so that they can cancel/upgrade
    // their active subscription.

    if (
      userSubscription &&
      userSubscription.stripeCustomerId
    ) {
      const stripeSession =
        await stripe.billingPortal.sessions.create({
          customer: userSubscription.stripeCustomerId,
          return_url: settingsUrl,
        });

      return new NextResponse(
        JSON.stringify({
          url: stripeSession.url,
        })
      );
    }

    // if there is no stripe subscription found
    // metadata : after user succesfully purchases monthly subscription
    // we are going to create a webhook which is going to catch the
    // response and read the metadata, find the userId for stripe to
    // know that the checkout completed belongs to which userId;

    const stripeSession =
      await stripe.checkout.sessions.create({
        success_url: settingsUrl,
        cancel_url: settingsUrl,
        payment_method_types: ["card"],
        mode: "subscription",
        billing_address_collection: "auto",
        customer_email: user.emailAddresses[0].emailAddress,
        line_items: [
          {
            price_data: {
              currency: "INR",
              product_data: {
                name: "Genius Pro",
                description: "Unlimited AI Generations",
              },
              unit_amount: 20000,
              recurring: {
                interval: "month",
              },
            },
            quantity: 1,
          },
        ],
        metadata: {
          userId,
        },
      });

    return new NextResponse(
      JSON.stringify({
        url: stripeSession.url,
      })
    );
  } catch (error) {
    console.log("[STRIPE_ERROR]", error);
    return new NextResponse("Internal error", {
      status: 500,
    });
  }
}
