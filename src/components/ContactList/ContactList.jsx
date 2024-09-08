import { useSelector, useDispatch } from "react-redux";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { deleteContact } from "../../redux/contacts/operations";
import {selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts); 


  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          item={contact}
          key={contact.id}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;