import React , {useState , useEffect} from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import {uuid} from 'uuidv4';//1er etape de suppression
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './App.css';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
 /* const contacts = [
    { 
        id: '1',
        name: 'souleyman',
        email: 'souleyman@gmail.com',
    },
    { 
        id: '2',
        name: 'issein',
        email: 'issein@gmail.com',
    }
];*/
  const addContactHandler= (contact) => {
    console.log(contact);
    setContacts([...contacts ,{id: uuid(), ...contact}]);//2e etape
  };

  //cette partie explique la suppression de nos contacts 
  const removeContactHandler = (id) => { //3e etape
   const newContactList = contacts.filter((contact) =>{
        return contact.id !== id;
   });
   setContacts(newContactList);//4e etape
  };
  //fin de la parti remove
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
   },[]);
  useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);
  return (
     <div className="ui container">
       <Router>
       <Header />
      <Switch>
        <Route 
             path="/add" 
             component={() =>( 
             <AddContact 
             addContactHandler={addContactHandler}/>
          )} 
        />
        <Route 
             path="/" 
             exact 
             component={() => (
             <ContactList 
             contacts={contacts}
             getContactId={removeContactHandler}/>
          )} 
        />
       {/*<AddContact addContactHandler={addContactHandler}/>*/}
       {/*<ContactList contacts={contacts} /*5etape getContactId={removeContactHandler} /> */}
       </Switch>
       </Router>
     </div>
  );
};

export default App;
