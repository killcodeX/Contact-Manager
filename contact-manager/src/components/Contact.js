import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSortDown } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
    state = {};
    onShowClick = (e) =>{
        
    }

    render() {
        const {name, email, phone} = this.props.contact;
        return (
            <div className="card card-body mb-3">
                <h4>{name} <FontAwesomeIcon icon={faSortDown} onClick={this.onShowClick}/></h4>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>
            </div>
        )
    }
}

Contact.propTypes = {
    contact:PropTypes.string.isRequired,
};

export default Contact;
