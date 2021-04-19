import './App.css';
import ContactsList from './components/ContactsList';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddContactForm from './components/AddContactForm';
import Header from './components/Header';
import EditContact from './components/EditContact';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ContactsList} />
            <Route path="/AddContact" component={AddContactForm} />
            <Route path='/EditContact' render={props => <EditContact {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
