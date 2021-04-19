import { React, useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const linkStyle = {
    textDecoration: 'none',
    color: 'initial !important',
}

const EditContact = (props) => {
    const [contact] = useState(props.location.contact);
    const [first, setFirst] = useState(contact.first);
    const [last, setLast] = useState(contact.last);
    const [phone, setPhone] = useState(contact.phone);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { editContact } = useContext(GlobalContext);
    const { setHeader } = useContext(GlobalContext);

    useEffect(() => {
        setHeader('Edit Contact');
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!first && !last && !phone) {
            return
        }
        const editedContact = {
            id: contact.id,
            first,
            last,
            phone
        }

        editContact(editedContact);
        setHeader('My Contacts');
        setFormSubmitted(true);
    }

    return (
        <form className='edit-contact-form'>
            <div className="control-container">
                <Link style={linkStyle} to='/'><button className="btn cancel-btn">&#9747;</button></Link>
                <button onClick={handleSubmit} className="btn save-btn" >&#10003;</button>
                {formSubmitted && <Redirect to='/' />}
            </div>
            <div className="all-form-controls">
                <div className='form-control'>
                    <label className='labels' htmlFor='first'> First Name
                    <br /><input className='inputs' id='first' type='text' placeholder='First name' value={first} onChange={(e) => setFirst(e.target.value)} />
                    </label>
                </div>
                <div className='form-control'>
                    <label className='labels' htmlFor='last'> Last Name
                    <br /><input className='inputs' id='last' type='text' placeholder='Last name' value={last} onChange={(e) => setLast(e.target.value)} />
                    </label>
                </div>
                <div className='form-control'>
                    <label className='labels' htmlFor='phone'>Phone Number
                    <br /><input className='inputs' id='phone' type='number' placeholder='Phone number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </label>
                </div>
            </div>
        </form>
    )
}

export default EditContact
