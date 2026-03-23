// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
app.use(bodyParser.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID || "YOUR_TWILIO_ACCOUNT_SID";
const authToken = process.env.TWILIO_AUTH_TOKEN || "YOUR_TWILIO_AUTH_TOKEN";
const client = twilio(accountSid, authToken);

app.post("/order", async (req, res) => {
  const { orderId, total } = req.body;

  try {
    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM || "whatsapp:+14155238886", // Twilio WhatsApp sandbox number
      to: process.env.OWNER_WHATSAPP_NUMBER || "whatsapp:+YOUR_NUMBER", // Owner's WhatsApp number
      body: `New order received! Order ID: ${orderId}, Total: ₹${total}`,
    });

    res.status(200).send({ success: true });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));
