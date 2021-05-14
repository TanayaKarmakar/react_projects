const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IqUu0SJyAwKJojTQGvv1erFh9PkXh3coLJ2ULRyXhQWOXTebjPFyvDiusKlJFMllAQ3uX6IrWOu3pcPkFY3i2Du00wyEDt6Gs');

//API

// - App Config
const app = express();

// - Middlewares
app.use(cors({
    origin: true
}));
app.use(express.json());

// - API Routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request received >>>>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'USD'
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example Endpoint
//http://localhost:5001/challenge-c56d1/us-central1/api
