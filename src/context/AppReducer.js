export default (state, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts],
            };
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
            }
        case 'EDIT_CONTACT':
            const contactsExceptEdited = state.contacts.filter(contact => contact.id !== action.payload.id);
            const allContactsWithEdited = [...contactsExceptEdited, action.payload]
            return {
                ...state,
                contacts: allContactsWithEdited
            }
        case 'EDIT_HEADER':
            return {
                ...state,
                header: action.payload
            }
        default:
            return state;
    }
}