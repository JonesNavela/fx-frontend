import { useEffect } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

function PaymentNotificationHandler() {
  useEffect(() => {
    // Make an HTTP request to the server
    axios
      .post("http://localhost:3001/payment-notification", {
        // Include any necessary request data here if needed
      })
      .then((response) => {
        const { payment_status, item_name, email_address } = response?.data;

        console.log("Payment Status:", payment_status);
        console.log("Item Name:", item_name);
        console.log("Email Address:", email_address);
        if (payment_status === "COMPLETE") {
          sendEmail(email_address, item_name);
          console.log("Payment was successful!");
        } else {
          console.log("Payment was canceled or failed.");
        }
      })
      .catch((error) => {
        // Handle any errors from the server
        console.error("Response Error:", error);
      });
  }, []); // Empty dependency array for running the effect once

  const sendEmail = async (email, item) => {
    // Replace these with your actual email service credentials
    const serviceId = "service_q8xdbk5";
    const templateId = "template_0sdou9y";
    const publicKey = "XMuBgQ3YGKWmWQ-0m";
    const userId = "XMuBgQ3YGKWmWQ-0m";

    // Initialize Email.js
    emailjs.init(userId);

    // Prepare email data
    const templateParams = {
      to_email: email,
      subject: "Welcome to FX Blueprint!",
      item_name: item,
    };

    try {
      // Send email using Email.js
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      console.log("Email sent successfully:", response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return null; // You can return null or omit the return statement
}

export default PaymentNotificationHandler;
