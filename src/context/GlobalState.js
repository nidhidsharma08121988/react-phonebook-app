import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer";

const initialState = {
    contacts: [
        {
            id: 1,
            first: 'Pankaj',
            last: 'Sharma',
            phone: '24537900'
        },
        {
            id: 2,
            first: 'Pahi',
            last: 'Sharma',
            phone: '24537901'
        }
    ],
    header: 'My Contacts'
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //actions
    const addContact = (contact) => {
        dispatch({
            type: 'ADD_CONTACT',
            payload: contact
        })
    }
    const deleteContact = (id) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id,
        })
    }

    return (
        <GlobalContext.Provider value={{
            contacts: state.contacts,
            header: state.header,
            addContact,
            deleteContact,

        }}>
            {children}
        </GlobalContext.Provider>
    );
}