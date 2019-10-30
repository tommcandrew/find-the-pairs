import React from 'react'
import './styles/Stats.css'

const Stats = (props) => {
    return (
        <div className="stats-wrapper">
            <p className="player-name-wrapper"><span className="name-label">Player: </span> <span className="player-name">{props.playerName}</span></p>
            <div className="score-wrapper">
                <span className="counter">Clicks: {props.clicks}</span>
                <span className="best-score">Best Score: {props.bestScore}</span>
            </div>
        </div>
    )
}

export default Stats