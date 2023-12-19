import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
            
                <div className="card m-3">
                    <img className="card-img-top" src={props.imageSrc} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
                    </div>
                </div>
        
        
    );
};

Card.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string
};





export default Card;