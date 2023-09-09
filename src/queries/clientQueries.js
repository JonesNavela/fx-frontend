import { gql } from "@apollo/client";

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      email
      item
      payment
    }
  }
`;

export { GET_CLIENTS }