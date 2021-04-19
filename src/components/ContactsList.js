import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Contact from './Contact';
import Footer from './Footer';
const ContactsList = () => {
    const { contacts } = useContext(GlobalContext);

    contacts.sort((a, b) => {
        if (a.first < b.first)
            return -1
        if (a.first > b.first)
            return 1
        return 0
    });

    const dispContacts = contacts.map((contact, index) => {
        return (
            <li className='listItem' key={index}>
                <Contact contact={contact} />
            </li>
        )
    })

    return (
        <div className='contacts-list-container'>
            <ul className='contacts-list'>
                {dispContacts}
            </ul>
            <Footer />
        </div>
    )
}

export default ContactsList
