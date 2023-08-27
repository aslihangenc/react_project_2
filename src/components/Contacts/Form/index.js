import React, { useState, useEffect } from 'react';

const initialFormValues = {fullname: "", phone_number: "" } 

function Form({addContact,contacts}) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === "" || form.phone_number === "") {
            return false;
        };

        addContact([...contacts, form]);
    };

    return (
        <form onSubmit={onSubmit}>

            <div className='inputs'>
                <input
                    name="fullname"
                    value={form.fullname}
                    placeholder='Name'
                    onChange={onChangeInput}
                />
            </div>

            <br />

            <div className='inputs'>
                <input
                    name="phone_number"
                    value={form.phone_number}
                    placeholder='Phone Number'
                    onChange={onChangeInput}
                />
            </div>

            <br />
            <div className="btn">
                <button >Add</button>
            </div>

        </form>
    )
}

export default Form