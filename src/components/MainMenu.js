import React from 'react'
import Header from './Header'
import './styles/MainMenu.css'

class MainMenu extends React.Component {

    state = {
        showForm: false
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
                            <p className="new-player" onClick={this.showForm}>NEW PLAYER</p>
                            <ul className="user-list" onClick={this.props.handleChoose}>
                                <li>John</li>
                                <li>Sam</li>
                                <li>Barry</li>
                            </ul>
                        </div>
                    }
                    {this.state.showForm &&
                        <div className="form-wrapper">
                            <p className="form-label">Enter your name:</p>
                            <input type="text" className="form-input" />
                            <p className="play-button">LET'S PLAY!</p>
                        </div>
                    }
                </div>
            </div>
        )

    }

}

export default MainMenu