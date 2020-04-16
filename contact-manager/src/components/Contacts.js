import React, { Component } from 'react';
import Contact from './Contact'

class Contacts extends Component {
    state = {
        contacts : [
            {
                id:1,
                name:'John Doe',
                email:'johndoe@gmail.com',
                phone:'555-555-5555'
            },
            {
                id:2,
                name:'Farhana Ahmed',
                email:'farhanax95@gmail.com',
                phone:'347-656-0526'
            },
            {
                id:3,
                name:'Aaquib Ahmed',
                email:'aaquibskimbox@gmail.com',
                phone:'799-663-0894'
            }
        ]
    };

    deleteContact = (id) => {
        const { contacts } = this.state;

        const newContacts = contacts.filter(contact => contact.id !== id);

        this.setState({
            contacts : newContacts
        })
    }

    render() {
        const {contacts} = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact key={contact.id}  contact={contact} deleteClickHandler={this.deleteContact.bind(this,contact.id)}/>
                ))}
            </React.Fragment>
        );
    }
};



export default Contacts;
