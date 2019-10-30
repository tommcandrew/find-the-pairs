import React from 'react'
import UIFx from 'uifx';
import slideSound from '../sounds/slide.wav';
import beepSound from '../sounds/beep.wav';
import pizza from '../images/pizza.png'
import apple from '../images/apple.png'
import coffee from '../images/coffee.png'
import chicken from '../images/chicken.png'
import spaghetti from '../images/spaghetti.png'
import juice from '../images/juice.png'
import cheese from '../images/cheese.png'
import cookies from '../images/cookies.png'
import './styles/Card.css'

const slide = new UIFx(
    slideSound,
    {
        volume: 0.16,
        throttleMs: 100
    }
)

// const beep = new UIFx(
//     beepSound,
//     {
//         volume: 0.16,
//         throttleMs: 100
//     }
// )

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

    const playSlide = () => {
        if (!props.muted) {
            slide.play()
        }
    }

    const handleClick = (e) => {
        if (e.target.classList.contains('image')) {
            return
        } else {
            if (!props.muted) {
                playSlide()
            }
            props.handleClick(e)
        }
    }

    // const playBeep = (e) => {
    //     if (e.target.classList.contains('image') || e.target.classList.contains('checking') || e.target.classList.contains('turned')) {
    //         return
    //     } else if (e.target.classList.contains('card') || e.target.classList.contains('card-front')) {
    //         if (!props.muted) {
    //             beep.play()
    //         }
    //     }
    // }

    return (
        <div className={`card ${props.food}`} onClick={handleClick}>
            <div className="card-inner">
                <div className="card-front">
                </div>
                <div className="card-back">
                    <img className="image" src={src} alt={props.food} />
                </div>
            </div>
        </div>
    )
}

export default Card
