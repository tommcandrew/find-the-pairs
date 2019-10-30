import React from 'react'
import './styles/Stats.css'

const Stats = (props) => {
    return (
        <div className="stats-wrapper">
            <span className="counter">Clicks: {props.clicks}</span>
            {props.highScore && <span className="high-score">High Score: {props.highScore}</span>}
        </div>
    )
}

export default Stats