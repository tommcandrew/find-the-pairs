import React from 'react'
import Header from './Header'
import './styles/MainMenu.css'

const MainMenu = (props) => {
    return (
        <div className="menu-wrapper">
            <div className="menu-content">
                <Header />
                <p className="choose-para">Choose player:</p>
                <ul className="user-list" onClick={props.handleChoose}>
                    <li>NEW PLAYER</li>
                    <li>John</li>
                    <li>Sam</li>
                    <li>Barry</li>
                </ul>
            </div>
        </div>
    )
}

export default MainMenu