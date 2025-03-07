const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const buyItem = async (req, res) => {
  const { itemName, itemPrice } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: itemName,
            },
            unit_amount: itemPrice * 100, 
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.protocol}://${req.get('host')}/home/success`,
      cancel_url: `${req.protocol}://${req.get('host')}/home/cancel`,
    });

    res.redirect(303, session.url);  
  } catch (error) {
    console.log('Error creating checkout session:', error);
    res.status(500).send('Error processing payment');
  }
};

module.exports = { buyItem };