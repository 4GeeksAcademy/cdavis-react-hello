import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
    return(
        <div className="card-footer text-body-secondary bg-dark p-4">
            <p className="text-center text-light">{props.copyright}</p>
        </div>
    )
}

Footer.propTypes = {
    copyright: PropTypes.string,
    
};

export default Footer;