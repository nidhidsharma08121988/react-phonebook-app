import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Contact = ({ contact }) => {
    const { deleteContact } = useContext(GlobalContext);
    const handleDelete = () => {
        console.log(contact.id);
        deleteContact(contact.id);
    }
    return (
        <div className="contact-delete-container">
            <div className="contact-container" >
                <h4>{contact.first} {contact.last}</h4>
                {contact.phone}
            </div>
            <div className="delete-button-container">
                <button onClick={handleDelete} className="btn cancel-btn">&#9747;</button>
            </div>
        </div>
    )
}

export default Contact
