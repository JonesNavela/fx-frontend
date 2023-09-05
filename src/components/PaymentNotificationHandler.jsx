import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';

function PaymentNotificationHandler() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    console.log("🚀 ~ file: PaymentNotificationHandler.jsx:10 ~ useEffect ~ searchParams:", searchParams)
    const paymentStatus = searchParams.get('payment_status');
    console.log("🚀 ~ file: PaymentNotificationHandler.jsx:12 ~ useEffect ~ paymentStatus:", paymentStatus)
    const item_name = searchParams.get('item_name');
    console.log("🚀 ~ file: PaymentNotificationHandler.jsx:14 ~ useEffect ~ item_name:", item_name)
    const email_address = searchParams.get('email_address');
    console.log("🚀 ~ file: PaymentNotificationHandler.jsx:16 ~ useEffect ~ email_address:", email_address)

    if (paymentStatus === 'COMPLETE') {
      sendEmail(email_address, item_name);
    } else {
      console.log('payment was cancelled!!!!');
    }
  }, [location.search]);

  async function sendEmail(email, item) {
    // Replace these with your actual email service credentials
    const serviceId = 'service_q8xdbk5';
    const templateId = 'template_0sdou9y';
    const publicKey = 'XMuBgQ3YGKWmWQ-0m'
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

  return;
}

export default PaymentNotificationHandler;
