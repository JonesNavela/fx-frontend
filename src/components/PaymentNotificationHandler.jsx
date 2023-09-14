import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery, useMutation } from "@apollo/client";
import { GET_CLIENTS } from '../queries/clientQueries'
import { DELETE_CLIENT } from '../mutations/clientMutations';
import emailjs from "emailjs-com";

function PaymentNotificationHandler() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: data?.id },

    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client?.id !== deleteClient?.id),
        },
      });
    },
  });

  useEffect(() => {
    if (!loading && !error) {
      data?.clients?.forEach((client) => {
        if (client.payment === "COMPLETE" && client.item === 'CURRENCY_PAIRS_GOLD_MONTHLY') {
          sendEmail(client.email, client.item, client.id, 'https://chat.whatsapp.com/He2FUmWc4yDLWwa1OMVJBW');
        } else if (client.payment === "COMPLETE" && client.item === 'CURRENCY PAIRS and GOLD (Lifetime)') {
          sendEmail(client.email, client.item, client.id, 'https://chat.whatsapp.com/ENdoHq0CIqXHdsNyNOUSET');
        } else if (client.payment === "COMPLETE" && client.item === 'INDICE SIGNALS (Monthly)') {
          sendEmail(client.email, client.item, client.id, 'https://chat.whatsapp.com/E0y2elqJSMsIUwkb38Unw2');
        } else if (client.payment === "COMPLETE" && client.item === 'INDICE SIGNALS (Lifetime)') {
          sendEmail(client.email, client.item, client.id, 'https://chat.whatsapp.com/BDTOFjOAqj2FuMVFJQozeE');
        } else if (client.payment === "COMPLETE" && client.item === 'MENTORSHIP BEGINNER PROGRAM') {
          sendEmail(client.email, client.item, client.id, 'https://chat.whatsapp.com/J8R8oFDBJFY0mBf7XV4OJe');
        } else if (client.payment === "COMPLETE" && client.item === 'MENTORSHIP STANDARD PROGRAM') {
          sendEmail(client.email, client.item, client.id, 'https://chat.whatsapp.com/J8R8oFDBJFY0mBf7XV4OJe');
        } else if (client.payment === "COMPLETE" && client.item === 'TRADING SESSIONS - FOREX LESSONS') {
          sendEmail(client.email, client.item, client.id, 'https://chat.whatsapp.com/J8R8oFDBJFY0mBf7XV4OJe');
        }
      });
    }
  }, [loading, error, data]);

  const sendEmail = async (email, item, clientId, groupLink) => {
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
      reply_to: 'mutenjejustin2@gmail.com',
      whatsLink: groupLink
    };

    try {
      // Send email using Email.js
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
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

  return <ToastContainer style={{ width: '300px' }} position={toast.POSITION.TOP_RIGHT}/>;
}

export default PaymentNotificationHandler;
