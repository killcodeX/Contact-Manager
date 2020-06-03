import React, { Component } from 'react';
import { Consumer } from '../context';
import TextInputGroup from '../components/layout/textInputGroup';
import {v1 as uuid} from 'uuid';

class AddContact extends Component {

    state = {
        name : '',
        email : '',
        phone : '',
        errors : {}
    }

    Submit = (dispatch,e) =>{
        e.preventDefault();
        const {name, email, phone, errors} = this.state;

        // check for Errors
        if(name === ''){
            this.setState({errors: { name: 'Name is required'}})
            return;
        }

        if(email === ''){
            this.setState({errors: { email: 'Email is required'}})
            return;
        }

        if(phone === ''){
            this.setState({errors: { phone: 'Phone is required'}})
            return;
        }


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
            phone : '',
            errors : {}
        })

        this.props.history.push('/');
    }

    stateChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }

    render() {

        const {name, email, phone, errors} = this.state;

        return(
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card mb-3'>
                            <div className='card-header'>Add Contact</div>
                            <div className='card-body'>
                                <form onSubmit={this.Submit.bind(this, dispatch)}>
                                    <TextInputGroup label='Name' name='name' placeholder='Enter your name..' value={name} onChange={this.stateChange} error={errors.name}/>
                                    <TextInputGroup label='Email' name='email' type='email' placeholder='Enter your email..' value={email} onChange={this.stateChange} error={errors.email}/>
                                    <TextInputGroup label='Phone' name='phone' placeholder='Enter your phone no..' value={phone} onChange={this.stateChange} error={errors.phone}/>
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