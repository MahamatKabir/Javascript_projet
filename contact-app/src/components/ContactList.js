import React from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    /*const contacts = [
        {
        id: '1',
        name: 'nasra',
        email: 'nasra@gmail.com',
       },
       {
        id: '2',
        name: 'nasra',
        email: 'nasra@gmail.com',
       },
];*/
   const renderContactList = props.contacts.map((contact) => {
    return (
          <ContactCard 
          contact={contact} 
          //permet la suppression 
          clickHander={deleteContactHandler} 
          key={contact.id} 
          />
       );
   });
    return (
      <div className="main">
          <h2>
              Contact List 
              <Link to="/add">
              <button className="ui button blue right">Add Contact</button>
              </Link>    
        </h2>
          <div className="ui celled-list">
            {renderContactList}
           </div>
        </div>
    )  
}
export default ContactList;