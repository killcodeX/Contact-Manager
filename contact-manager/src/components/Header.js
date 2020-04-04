import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) =>{
    const {branding} =props;
    return (
        <div>
            <h1 style={headingStyle}>{branding}</h1>
        </div>
    )
};

const headingStyle = {
    color:'green', 
    fontSize:'50px'
};

Header.props = {
    branding: 'My App'
};
Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;
