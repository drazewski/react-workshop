import React from 'react';

function Contact(props) {
    return (
      <div className="container">
      <p>imię, nazwisko: {props.person.name} {props.person.surname}</p>
      <p>wiek: {props.person.age} </p>
      <hr/>
      </div>
    );
}
export default Contact;