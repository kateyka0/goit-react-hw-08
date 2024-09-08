import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { addContact } from '../../redux/contacts/contactsOps';
import { useDispatch } from 'react-redux';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, actions) => {
    const newUser = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newUser));
    actions.resetForm();
  };

  const nameFieldId = 'name';
  const numberlFieldId = 'number';


  return (
    <Formik
       validationSchema={ContactFormSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
    >
      <Form className={css.formWrap}>
        <div className={css.inputWrap}>
          <label htmlFor={nameFieldId} className={css.inputLabel}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.input}
           placeholder = "Katrin"
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.inputWrap}>
          <label htmlFor={numberlFieldId} className={css.inputLabel}>
            Number
          </label>
          <Field
            type="phone"
            name="number"
            id={numberlFieldId}
            className={css.input}
             placeholder = "096-478-25-45"
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit" className={css.addButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
export default ContactForm;