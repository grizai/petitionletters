/*
 * This function implements a Stripe webhook handler to handle
 * fulfillment for our successful payments.
 *
 * @see https://stripe.com/docs/payments/checkout/fulfillment#webhooks
 */
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-03-02',
    maxNetworkRetries: 2,
 });

exports.handler = async ({ body, headers }) => {
try {
    const stripeEvent = stripe.webhooks.constructEvent(
    body,
    headers['stripe-signature'],
    process.env.STRIPE_WEBHOOK_SECRET
    );

    if (stripeEvent.type === 'checkout.session.completed') {
    const eventObject = stripeEvent.data.object;
    const items = JSON.parse(eventObject.metadata.items);
    const shippingDetails = eventObject.shipping;

    // Here make an API call / send an email to your fulfillment provider.
    const purchase = { items, shippingDetails };
    console.log(`📦 Fulfill purchase:`, JSON.stringify(purchase, null, 2));
    }

    return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
    };
} catch (err) {
    console.log(`Stripe webhook failed with ${err}`);

    return {
    statusCode: 400,
    body: `Webhook Error: ${err.message}`,
    };
}
};
