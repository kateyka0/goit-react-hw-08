import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading, selectError } from '../redux/contacts/slice';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';



const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error && <p>Error loading contacts. Please try again.</p>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
