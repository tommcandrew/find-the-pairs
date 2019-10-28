import React from 'react'
import pizza from './pizza.png'
import apple from './apple.png'
import coffee from './coffee.png'
import chicken from './chicken.png'
import spaghetti from './spaghetti.png'
import juice from './juice.png'
import cheese from './cheese.png'
import cookies from './cookies.png'

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
                    <img src={src} />
                </div>
            </div>
        </div>
    )
}

export default Card
