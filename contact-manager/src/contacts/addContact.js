import React, { Component } from 'react';
import { Consumer } from '../context';
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
                                    <div className='form-group'>
                                        <label htmlFor='name'>Name</label>
                                        <input type='text'  name='name' className='form-control form-control-lg' placeholder='Enter name...' value={name} onChange={this.stateChange}/>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='email'>Email</label>
                                        <input type='email'  name='email' className='form-control form-control-lg' placeholder='Enter email...' value={email} onChange={this.stateChange}/>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='phone'>Phone</label>
                                        <input type='text'  name='phone' className='form-control form-control-lg' placeholder='Enter phone...' value={phone} onChange={this.stateChange}/>
                                    </div>
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