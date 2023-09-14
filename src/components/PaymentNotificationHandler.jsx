/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery, useMutation } from "@apollo/client";
import { GET_CLIENTS } from '../queries/clientQueries'
import { DELETE_CLIENT } from '../mutations/clientMutations';
import emailjs from "emailjs-com";

const EMAIL_SERVICE_ID = "service_q8xdbk5";
const EMAIL_TEMPLATE_ID = "template_0sdou9y";
const EMAIL_PUBLIC_KEY = "XMuBgQ3YGKWmWQ-0m";
const EMAIL_USER_ID = "XMuBgQ3YGKWmWQ-0m";

const EMAIL_LINK_MAP = {
  'CURRENCY_PAIRS_GOLD_MONTHLY': 'https://chat.whatsapp.com/He2FUmWc4yDLWwa1OMVJBW',
  'CURRENCY PAIRS and GOLD (Lifetime)': 'https://chat.whatsapp.com/ENdoHq0CIqXHdsNyNOUSET',
  'INDICE SIGNALS (Monthly)': 'https://chat.whatsapp.com/E0y2elqJSMsIUwkb38Unw2',
  'INDICE SIGNALS (Lifetime)': 'https://chat.whatsapp.com/BDTOFjOAqj2FuMVFJQozeE',
  'MENTORSHIP BEGINNER PROGRAM': 'https://chat.whatsapp.com/J8R8oFDBJFY0mBf7XV4OJe',
  'MENTORSHIP STANDARD PROGRAM': 'https://chat.whatsapp.com/J8R8oFDBJFY0mBf7XV4OJe',
  'TRADING SESSIONS - FOREX LESSONS': 'https://chat.whatsapp.com/J8R8oFDBJFY0mBf7XV4OJe',
};

function PaymentNotificationHandler() {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [deleteClient] = useMutation(DELETE_CLIENT);

  useEffect(() => {
    if (!loading && !error) {
      data?.clients?.forEach((client) => {
        if (client.payment === "COMPLETE" && EMAIL_LINK_MAP[client.item]) {
          sendEmail(client.email, client.item, client.id);
        }
      });
    }
  }, [loading, error, data]);

  const sendEmail = async (email, item, clientId) => {
    emailjs.init(EMAIL_USER_ID);

    const templateParams = {
      to_email: email,
      subject: "Welcome to FX Blueprint!",
      item_name: item,
      reply_to: 'mutenjejustin2@gmail.com',
      whatsLink: EMAIL_LINK_MAP[item]
    };

    try {
      const response = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams,
        EMAIL_PUBLIC_KEY
      );
      toast.success('Payment successful! Please check your email', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log("Email sent successfully:", response);
      await deleteClient({ variables: { id: clientId } });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return <ToastContainer style={{ width: '300px' }} position={toast.POSITION.TOP_RIGHT} />;
}

export default PaymentNotificationHandler;
