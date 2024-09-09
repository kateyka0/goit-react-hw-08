import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../../redux/contacts/operations';;
import { selectContacts, selectLoading, selectError, selectFilteredContacts } from '../../redux/contacts/slice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  const [newContact, setNewContact] = useState({ name: '' }); // Стейт для нового контакту

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = () => {
    if (newContact.name.trim()) {
      dispatch(addContact(newContact));
      setNewContact({ name: '' }); // Очистити поле після додавання
    }
  };

  const handleChange = (e) => {
    setNewContact({ name: e.target.value });
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error occurred!</p>}
      

      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <Contact
            item={contact}
            key={contact.id}
            onDelete={() => dispatch(deleteContact(contact.id))}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;



