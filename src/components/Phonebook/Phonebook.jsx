import { useState, useEffect } from "react";
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

export function Phonebook() {
  const [contacts, setContacts] = useState(() => {
  const contacts = localStorage.getItem("contacts");
  const parsedContacts = JSON.parse(contacts);
  return parsedContacts || [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ];
  });
  
  const [filter, setFilter] = useState('');

  const onChangeFilter = event => {
    setFilter(event.target.value);
  };

  const addContact = ({ name, number }) => {
    const newContact = {
        id: nanoid(),
        name,
        number,
    } 
    if (contacts.find(contact => contact.name === name)) {
      Notify.warning(`${name} is already in contacts`, { position: "center-top"}); 
          return
        };
    setContacts([...contacts, newContact]
    );
    Notify.success(`${name} added to contacts`, { position: "center-top"}); 
  };

  const getFilterContacts = () => {
    const caseInsensitive = filter.toLowerCase();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(caseInsensitive));
  };

  const deleteContact = (id, name) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
    Notify.info(`${name} added to contacts`, { position: "center-top"});
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
      <Card>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        
        <h2>Contacts</h2>
        <Filter value={filter}
                onChange={onChangeFilter}/>
        <ContactList getFilterContacts={getFilterContacts}
          deleteContact={ deleteContact } />
      </Card>
    )
}

const Card = styled.div`
  margin: 0 auto;
  padding: 16px;
  width: 400px;
  border: 4px solid;
  border-radius: 20px;
  background: lavender;
`











// export class OldPhonebook extends Component {
//   state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter: ''
// }

  // onChangeFilter = (event) => this.setState({ filter: event.target.value});
  //   // console.log(event.target.value);
  
  // addContact = ({ name, number }) => {
  //   const { contacts } = this.state;
  //   const newContact = {
  //       id: nanoid(),
  //       name,
  //       number,
  //   } 
  //   if (contacts.find(contact => contact.name === name)) {
  //     Notify.warning(`${name} is already in contacts`, { position: "center-top"}); 
  //         return
  //       };
  //   this.setState ({
  //     contacts: [...contacts, newContact]
  //   });
  //   Notify.success(`${name} added to contacts`, { position: "center-top"}); 

  // };

  // getFilterContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const caseInsensitive = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(caseInsensitive));
  // };

  // deleteContact = (id, name) => { 
  //   this.setState ({ contacts: this.state.contacts.filter((contact) => contact.id !== id)})
  //   Notify.info(`${name} added to contacts`, { position: "center-top"});
  // };

  // componentDidUpdate(prevProps, prevState) { 
  //   // console.log('применяется componentDidUpdate')
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // };

  // componentDidMount() {
  //   // console.log('применяется ccomponentDidMount');
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts})
  //   };
  // };

//   render() {
//     // console.log(this.state);
//     const { addContact,
//       onChangeFilter,
//       getFilterContacts,
//       deleteContact } = this;
//     const { filter } = this.state;

//     return (
//       <Card>
//         <h1>Phonebook</h1>
//         <ContactForm addContact={addContact} />
        
//         <h2>Contacts</h2>
//         <Filter value={filter}
//                 onChange={onChangeFilter}/>
//         <ContactList getFilterContacts={getFilterContacts}
//           deleteContact={ deleteContact } />
//       </Card>
//     )
//   }
// }

