import s from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <div className={s.listItem}>
      <div className={s.wrapperContact}>
        <div className={s.wrapper}>
          <IoPerson className={s.icon} />
          <p className={s.titleContact}>{name}</p>
        </div>
        <div>
          <BsFillTelephoneFill className={s.icon} />
          <span className={s.titleNumber}>{number}</span>
        </div>
      </div>

      <div className={s.btnBox}>
        <button onClick={() => onDelete(id)} className={s.btnContact}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
