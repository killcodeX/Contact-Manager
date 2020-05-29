import React, { Component } from 'react';
import { Consumer } from '../context';
import TextInputGroup from '../components/layout/textInputGroup';
import {v1 as uuid} from 'uuid';

class AddContact extends Component {

    state = {
        name : '',
        email : '',
        phone : ''
    }

    Submit = (dispatch,e) =>{
        e.preventDefault();
        const {name, email, phone} = this.state;
        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }

        dispatch({type: 'ADD_CONTACT', payload: newContact})

        // to clear state
        this.setState({
            name : '',
            email : '',
            phone : ''
        })
    }

    stateChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }

    render() {

        const {name, email, phone} = this.state;

        return(
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card mb-3'>
                            <div className='card-header'>Add Contact</div>
                            <div className='card-body'>
                                <form onSubmit={this.Submit.bind(this, dispatch)}>
                                    <TextInputGroup label='Name' name='name' placeholder='Enter your name..' value={name} onChange={this.stateChange}/>
                                    <TextInputGroup label='Email' name='email' type='email' placeholder='Enter your email..' value={email} onChange={this.stateChange}/>
                                    <TextInputGroup label='Phone' name='phone' placeholder='Enter your phone no..' value={phone} onChange={this.stateChange}/>
                                    <input type='submit' value='Add contact' className='btn btn-block btn-light' />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;