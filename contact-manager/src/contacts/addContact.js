import React, { Component } from 'react'

class AddContact extends Component {

    state = {
        name : '',
        email : '',
        phone : ''
    }

    render() {

        const {name, email, phone} = this.state;

        return (
            <div className='card mb-3'>
                <div className='card-header'>Add Contact</div>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input type='text'  name='name' className='form-control form-control-lg' placeholder='Enter name...' value={name} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='email'  name='email' className='form-control form-control-lg' placeholder='Enter email...' value={email} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='phone'>Phone</label>
                            <input type='text'  name='phone' className='form-control form-control-lg' placeholder='Enter phone...' value={phone} />
                        </div>
                        <input type='submit' value='Add contact' className='btn btn-block btn-light' />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;