import React from 'react'
import './styles/Modal.css'

const Modal = (props) => {

    let score
    if (props.clicks < 30) {
        score = 'EXCELLENT'
    } else if (props.clicks >= 30 && props.clicks < 35) {
        score = 'GOOD'
    } else if (props.clicks > 35) {
        score = 'OK'
    }

    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                <p className="modal-para">You completed the game in {props.clicks} clicks. <br />Your score is...</p>
                <p className="score">{score}</p>
                <button className="modal-button" onClick={props.playAgain}>Play Again</button>
            </div>

        </div>
    )
}

export default Modal