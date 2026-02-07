import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import toast from "react-hot-toast";
import { useId } from "react";
import css from "./ContactForm.module.css";

interface ContactsFormValues {
  email: string;
  message: string;
}

interface ContactsFormProps {
  onCancel: () => void;
}

const initialValues: ContactsFormValues = {
  email: "",
  message: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .min(3, "Email too short")
    .max(50, "Email too long")
    .required("Email is required"),
  message: Yup.string()
    .min(3, "Message is too short")
    .max(500, "Message too long")
    .required("Message is required"),
});

export default function ContactsForm({ onCancel }: ContactsFormProps) {
  const fieldId = useId();

  const handleSubmit = (
    values: ContactsFormValues,
    actions: FormikHelpers<ContactsFormValues>,
  ) => {
    toast.success("Message sent!");
      actions.resetForm();
      onCancel(); 
  };

  return (
    <section className={css.contactSection}>
      <div className={css.info}>
        <h2 className={css.title}>
          LET’S <span>WORK</span>
          <br />
          TOGETHER
        </h2>

        <p className={css.subtitle}>
          Contact me to transform your ideas into exceptional solutions.
        </p>

        <ul className={css.contacts}>
          <li>✉️ ann.malchevska@gmail.com</li>
          <li>📍Ukraine</li>
        </ul>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <label htmlFor={`${fieldId}-email`}>Email</label>
              <Field
                type="email"
                id={`${fieldId}-email`}
                name="email"
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor={`${fieldId}-message`}>Message</label>
              <Field
                as="textarea"
                id={`${fieldId}-message`}
                name="message"
                rows={8}
                className={css.textarea}
              />
              <ErrorMessage
                name="message"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.actions}>
              <button
                type="button"
                className={css.cancelButton}
                onClick={onCancel}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={css.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}
