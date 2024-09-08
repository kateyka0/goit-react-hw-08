import css from './Contact.module.css'
import { HiUser, HiPhone } from "react-icons/hi2";
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
const Contact = ({ item }) => {
  const dispatch = useDispatch();
  const onDaleteContact = (id) => dispatch(deleteContact(id));
  return (
    <div className={css.card}>
      <div className={css.contacts}>
        <div className={css.info}>
          <HiUser size={"20px"} title="contact icon" />
          <p>{item.name}</p>
        </div>
        <div className={css.info}>
          <HiPhone size={"20px"} title="phone icon" />
          <p>{item.number}</p>
        </div>
          </div>
          
      <button className={css.deleteButton}
        type='button'
        onClick={() => onDaleteContact(item.id)}>
        Delete
      </button>
    </div>
  );
}
export default Contact;