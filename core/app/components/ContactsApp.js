import React, {Component, PropTypes} from "react";
import ContactList from "./ContactList";
import SearchBar from "./SearchBar";

class ContactsApp extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            contacts: this.props.initialData || [],
            filterText: ""
        };
    }

    handleUserInput(searchTerm) {
        this.setState({filterText: searchTerm});
    }

    render() {
        return (
            <div>
                <SearchBar onUserInput={this.handleUserInput.bind(this)}
                           filterText={this.state.filterText}/>
                <ContactList filterText={this.state.filterText}
                             contacts={this.state.contacts}/>
            </div>
        );
    }
}

ContactsApp.propTypes = {
    initialData: PropTypes.array
};

export default ContactsApp;