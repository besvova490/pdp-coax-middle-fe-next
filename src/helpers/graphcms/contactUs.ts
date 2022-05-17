import { gql } from "@apollo/client";


const contactUs = {
  createContactUs: gql `
  mutation createContactUs($firstName: String!, $lastName: String!, $email: String!, $phone: String!, $message: String!) {
    createContactUs(
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        phone: $phone
        message: $message
      }
    ) {
      id
    }
  }`,
};

export default contactUs;
