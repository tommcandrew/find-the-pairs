import React from 'react'
import './styles/Stats.css'

const Stats = (props) => {
    return (
        <div className="stats-wrapper">
            <p className="player-name">Player: {props.playerName}</p>
            <div className="score-wrapper">
                <span className="counter">Clicks: {props.clicks}</span>
                <span className="high-score">Best Score: {props.highScore}</span>
            </div>
        </div>
    )
}

export default Stats