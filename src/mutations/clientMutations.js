import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  mutation addClient($item: String!, $email: String!, $payment: String!) {
    addClient(item: $item, email: $email, payment: $payment) {
      id
      item
      email
      payment
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      item
      email
      payment
    }
  }
`;

export { ADD_CLIENT, DELETE_CLIENT }