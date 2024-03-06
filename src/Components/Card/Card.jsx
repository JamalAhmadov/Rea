import React from 'react';
import './styles.css'

function Card(props) {
    return (
        <div className="main-card">
            <img src={props.image} alt={props.title} />
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

Card.defaultProps = {
    description: "Our membership management software provides full automation of membership renewals and payments"
};

export default Card;
