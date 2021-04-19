import { React, useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const linkStyle = {
    textDecoration: 'none',
    color: 'initial !important',
}

const AddContactForm = () => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [phone, setPhone] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { addContact } = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!first && !last && !phone) {
            return
        }
        const newContact = {
            id: Math.floor(Math.random() * 100) + 1,
            first,
            last,
            phone
        }
        console.log(newContact)
        addContact(newContact);
        setHeader('My Contacts');
        setFormSubmitted(true);
    }
    const { setHeader } = useContext(GlobalContext);
    useEffect(() => {
        setHeader('Add Contact');
    }, [])

    return (
        <form className='add-contact-form'>
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

export default AddContactForm
