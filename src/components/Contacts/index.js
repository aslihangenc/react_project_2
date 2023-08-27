import React, { useState, useEffect } from 'react';

import List from './List'
import Form from './Form'

import "./styles.css"

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Aslı",
            phone_number: 123456
        },{
            fullname: "Mehmet",
            phone_number: 456789
        },{
            fullname: "Ayşe",
            phone_number: 123789
        },
    ]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div id='container'>
            <h1>Contacts List</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts