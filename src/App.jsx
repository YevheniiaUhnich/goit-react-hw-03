// import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactsData from "./contactsData.json";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [contactValue, setContactValue] = useState("");
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem("savedClicks");
    return savedClicks !== null ? JSON.parse(savedClicks) : 0;
  });

  useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const handleDeleteContacts = (id) => {
    const newData = contacts.filter((contactsData) => contactsData.id !== id);
    console.log(newData);
    setContacts(newData);
  };

  const addContact = (contact) => {
    const newContact = {
      id: crypto.randomUUID(),
      ...contact,
    };
    setContacts([...contacts, newContact]);
  };
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm
        setClicks={setClicks}
        clicks={clicks}
        addContact={addContact}
      />

      <SearchBox
        contactValue={contactValue}
        setContactValue={setContactValue}
      />
      <ContactList
        contacts={contacts}
        handleDeleteContacts={handleDeleteContacts}
      />
    </div>
  );
}

export default App;
