import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import { Link } from 'react-router-dom'
import { FiEdit2 } from 'react-icons/fi'

const Contact = ({ contact }) => {
    const { deleteContact } = useContext(GlobalContext);
    const handleDelete = () => {
        console.log(contact.id);
        deleteContact(contact.id);
    }
    const linkStyle = {
        textDecoration: 'none',
        color: 'initial !important',
    }
    return (
        <div className="contact-delete-container">
            <div className="contact-container" >
                <h4>{contact.first} {contact.last}</h4>
                {contact.phone}
            </div>
            <div className="edit-button-container">
                <Link style={linkStyle} to={{
                    pathname: '/EditContact',
                    contact: contact
                }}>
                    <button className="edit-btn btn"><FiEdit2 /></button>
                </Link>
            </div>
            <div className="delete-button-container">
                <button onClick={handleDelete} className="btn cancel-btn">&#9747;</button>
            </div>
        </div>
    )
}

export default Contact
