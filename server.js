// server.js
const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
app.use(bodyParser.json());

const accountSid = "TWILIO_ACCOUNT_SID";
const authToken = "TWILIO_AUTH_TOKEN";
const client = twilio(accountSid, authToken);

app.post("/order", async (req, res) => {
  const { orderId, total } = req.body;

  try {
    await client.messages.create({
      from: "whatsapp:+14155238886", // Twilio WhatsApp sandbox number
      to: "whatsapp:+919345974814", // Owner's WhatsApp number
      body: `New order received! Order ID: ${orderId}, Total: ₹${total}`,
    });

    res.status(200).send({ success: true });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));
