const express = require('express');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.get('/payment-notification', async (req, res) => {
  // Retrieve payment notification data from the request
  const { payment_status, item_name, email_address } = req.body;
  console.log("🚀 ~ app.post ~ email_address:", email_address)
  console.log("🚀 ~ app.post ~ item_name:", item_name)
  console.log("🚀 ~ app.post ~ payment_status:", payment_status)

  // Check payment status
  if (payment_status === 'COMPLETE') {
    try {
      // Replace these with your actual email service credentials
      const serviceId = 'service_q8xdbk5';
      const templateId = 'template_0sdou9y';
      const publicKey = 'XMuBgQ3YGKWmWQ-0m';
      const userId = 'XMuBgQ3YGKWmWQ-0m';

      // Initialize Email.js
      emailjs.init(userId);

      // Prepare email data
      const templateParams = {
        to_email: email_address,
        subject: 'Welcome to FX Blueprint!',
        item_name: item_name,
      };

      // Send email using Email.js
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  // Respond with a 200 status code to acknowledge receipt
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
