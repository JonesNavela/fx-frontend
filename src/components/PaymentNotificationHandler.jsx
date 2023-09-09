import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';

function PaymentNotificationHandler() {
  const location = useLocation();

  useEffect(() => {
    // Parse URL parameters
    const searchParams = new URLSearchParams(location.search);
    const paymentStatus = searchParams.get('payment_status');
    const item_name = searchParams.get('item_name');
    const email_address = searchParams.get('email_address');

    // Check payment status
    if (paymentStatus === 'COMPLETE') {
      sendEmail(email_address, item_name);
      console.log('Payment was successful!');
    } else {
      console.log('Payment was canceled or failed.');
    }
  }, []); // Empty dependency array for running the effect once

  const sendEmail = async (email, item) => {
    // Replace these with your actual email service credentials
    const serviceId = 'service_q8xdbk5';
    const templateId = 'template_0sdou9y';
    const publicKey = 'XMuBgQ3YGKWmWQ-0m';
    const userId = 'XMuBgQ3YGKWmWQ-0m';

    // Initialize Email.js
    emailjs.init(userId);

    // Prepare email data
    const templateParams = {
      to_email: email,
      subject: 'Welcome to FX Blueprint!',
      item_name: item,
    };

    try {
      // Send email using Email.js
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  return null; // You can return null or omit the return statement
}

export default PaymentNotificationHandler;
