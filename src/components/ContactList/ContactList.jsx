import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, handleDeleteContacts }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => (
        <li className={s.contactLi} key={contact.id}>
          <Contact contact={contact} onDelete={handleDeleteContacts} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
