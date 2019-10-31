import React from 'react'
import './styles/Modal.css'
import UIFx from 'uifx'
import playAgainSound from '../sounds/playagain.wav'
import hoverSound from '../sounds/hum.wav';

const selectPlayAgain = new UIFx(
    playAgainSound,
    {
        volume: 0.5,
        throttleMs: 100
    }
)

const hover = new UIFx(
    hoverSound,
    {
        volume: 0.3,
        throttleMs: 100
    }
)

const Modal = (props) => {

    const playAgain = () => {
        if (!props.muted) {
            selectPlayAgain.play()
        }
        props.playAgain()
    }

    const playHover = () => {
        if (!props.muted) {
            hover.play()
        }
    }

    let score
    if (props.clicks < 25) {
        score = 'EXCELLENT'
    } else if (props.clicks >= 25 && props.clicks < 30) {
        score = 'VERY GOOD'
    } else if (props.clicks >= 30 && props.clicks < 35) {
        score = 'OK'
    } else if (props.clicks >= 35 && props.clicks < 40) {
        score = 'POOR'
    } else if (props.clicks >= 40) {
        score = 'RUBBISH'
    }

    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                <div className="modal-main-content">
                    <p className="modal-para">You completed the game in {props.clicks} clicks.</p>
                    {props.newBestScore && <p className="best-para">NEW BEST SCORE!</p>}
                    <p className="rating-para">Your rating is...</p>
                </div>
                <p className="score">{score}</p>
                <button className="modal-button" onClick={playAgain} onMouseEnter={playHover}>Play Again</button>
            </div>

        </div>
    )
}

export default Modal