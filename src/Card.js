import React from 'react'
import pizza from './images/pizza.png'
import apple from './images/apple.png'
import coffee from './images/coffee.png'
import chicken from './images/chicken.png'
import spaghetti from './images/spaghetti.png'
import juice from './images/juice.png'
import cheese from './images/cheese.png'
import cookies from './images/cookies.png'

const Card = (props) => {

    let src
    switch (props.food) {
        case 'pizza':
            src = pizza;
            break;
        case 'apple':
            src = apple;
            break;
        case 'coffee':
            src = coffee;
            break;
        case 'chicken':
            src = chicken;
            break;
        case 'spaghetti':
            src = spaghetti;
            break;
        case 'juice':
            src = juice;
            break;
        case 'cheese':
            src = cheese;
            break;
        case 'cookies':
            src = cookies;
            break;
        default:
            src = ''
    }

    return (
        <div className={`card ${props.food}`} onClick={props.handleClick}>
            <div className="card-inner">
                <div className="card-front">
                </div>
                <div className="card-back">
                    <img src={src} alt={props.food} />
                </div>
            </div>
        </div>
    )
}

export default Card
