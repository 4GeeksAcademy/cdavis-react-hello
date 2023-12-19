import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
    return (
        <div className="container-fluid bg-light p-5">
            
            <div className="jumbotron m-5 ">
                <h1 className="display-4">{props.title}</h1>
                <p>{props.description}</p>
                <a href={props.buttonURL} className="btn btn-success">{props.buttonLabel}</a>
            </div>
        </div>
        
    );
};

Jumbotron.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonUrl: PropTypes.string
};


export default Jumbotron;