import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSortDown } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onShowClick = (e) =>{
        this.setState({showContactInfo : !this.state.showContactInfo });
    }

    render() {
        const {name, email, phone} = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <div className="card card-body mb-3">
                <h4>{name} <FontAwesomeIcon icon={faSortDown} onClick={this.onShowClick} style={{ cursor:'pointer' }}/><FontAwesomeIcon icon={faTimes} style={{cursor:'pointer', float:'right', color:'red'}}/></h4>
                {showContactInfo ? ( <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>) : null}
                
            </div>
        )
    }
}

Contact.propTypes = {
    contact:PropTypes.string.isRequired,
};

export default Contact;
