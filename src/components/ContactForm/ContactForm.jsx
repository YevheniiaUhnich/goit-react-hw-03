import { Field, Formik, Form, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useId } from "react";
import React from "react";
import { nanoid } from "nanoid";

const ContactForm = ({ setClicks, clicks, addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")

      .required("Required to fill"),
    number: Yup.string()
      .matches(/^\+?[0-9\s-]{7,15}$/, "Must be a valid phone number")
      .required("Number is required to fill"),
  });

  const initialValues = () => ({
    name: "",
    number: "",
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };

    addContact(newContact);
    setClicks(clicks + 1);
    actions.resetForm();
  };
  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues()}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}>
        <Form className={s.formWrapper}>
          <label htmlFor={nameFieldId} className={s.label}>
            <span>Name</span>
            <Field
              className={s.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={s.errorMessage}
            />
          </label>

          <label htmlFor={numberFieldId} className={s.label}>
            <span>Number</span>
            <Field
              className={s.input}
              type="tel"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={s.errorMessage}
            />
          </label>

          <button type="submit" className={s.btnAddContact}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
