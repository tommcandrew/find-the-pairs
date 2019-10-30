import React from 'react'
import Header from './Header'
import './styles/MainMenu.css'
import UIFx from 'uifx';
import clickSound from '../sounds/click.wav';

const click = new UIFx(
    clickSound,
    {
        volume: 0.2,
        throttleMs: 100
    }
)

class MainMenu extends React.Component {

    state = {
        showForm: false
    }

    playClick = () => {
        click.play()
    }

    showForm = () => {
        this.setState(() => ({showForm: true}))
    }

    render() {

        return (
            <div className="menu-wrapper">
                <div className="menu-content">
                    <Header />
                    {!this.state.showForm &&
                        <div>
                            <p className="choose-para">Choose player:</p>
                            <p className="new-player" onMouseOver={this.playClick} onClick={this.showForm}>NEW PLAYER</p>
                            <ul className="user-list" onClick={this.props.handleChoose}>
                                {this.props.players.map((player, i) => <li onMouseOver={this.playClick} key={i} onClick={() => {this.props.setPlayer(player)}}>{player.name}</li>)}
                            </ul>
                        </div>
                    }
                    {this.state.showForm &&
                        <form className="form-wrapper" onSubmit={this.props.saveNewPlayer}>
                            <p className="form-label">Enter your name:</p>
                            <input type="text" className="form-input" name="nameInput" />
                            <button type="submit" className="play-button">LET'S PLAY!</button>
                        </form>
                    }
                </div>

            </div>

        )

    }

}

export default MainMenu