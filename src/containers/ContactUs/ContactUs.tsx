import React from "react";
import { useFormik } from "formik";
import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

// elements
import Button from "src/elements/Button";
import Input from "src/elements/Input";

// components
import { ContactUsStyled } from "./ContactUs.styled";


const mutation = gql `
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
}
`;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

function ContactUs() {
  const [addContactUs] = useMutation(mutation);

  const { handleChange, values, handleSubmit, resetForm } = useFormik({
    initialValues,
    onSubmit: async (data) => {
      await addContactUs({ variables: data }).catch(() => toast.error("Something went wrong"));

      toast.success("We will text with you soon");
      resetForm({ values: initialValues })
    },
  });

  const { firstName, lastName, email, phone, message } = values;


  return (
    <ContactUsStyled>
      <div className="rate-it__contact-form-text">
        We all know that time is money...<br/>
        so stop wasting time, and save money with Rate It!
      </div>
      <form className="rate-it__contact-form" onSubmit={handleSubmit}>
        <div className="rate-it__contact-form-body">
          <Input onChange={handleChange} value={firstName} name="firstName" placeholder="First Name"/>
          <Input onChange={handleChange} value={lastName} name="lastName" placeholder="Last Name"/>
          <Input onChange={handleChange} value={email} name="email" placeholder="Email"/>
          <Input onChange={handleChange} value={phone} name="phone" placeholder="Phone"/>
        </div>
        <Input onChange={handleChange} value={message} name="message" fullWidth placeholder="Message"/>
        <div className="rate-it__contact-form-footer">
          <Button htmlType="submit" primary>Send Message</Button>
        </div>
      </form>
    </ContactUsStyled>
  );
}

export default ContactUs;

