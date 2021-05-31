import React from 'react';
import user from '../components/images/user.png';
const ContactCard = (props) => {
    const {id , name, email} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                 <div className="header">{name}</div>
                 <div>{email}</div>
            </div> 
            <i className="trash alternate outline icon" 
            style={{color:"red"}}
            //cette partie explique la suite de comment supprime le contact 6 etape
             onClick={() => props.clickHander(id)}>
             </i>
    </div>
    );
}
export default ContactCard;