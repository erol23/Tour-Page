import React from 'react';
import './Card.css';
import { data } from '../../helpers/data';

const Card = () => {
    return(
        <div className="card-container">
            {data.map((card) => {
                return(
                <div className='cards'>
                    <div className="title">
                        <h2>{card.title}</h2>
                    </div>
                    <img src={card.image} alt={card.title}/>
                    <div className="card-over">
                        <p>{card.desc}</p>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Card;