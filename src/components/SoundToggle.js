import React from 'react'
import './styles/SoundToggle.css'

const SoundToggle = (props) => {

    return (

        <div className="sound-toggle-wrapper" onClick={props.toggleSound}>
            {!props.muted && <i class='fas fa-volume-up' title="Mute sounds"></i>}
            {props.muted && <i class='fas fa-volume-mute' title="Unmute sounds"></i>}
        </div>
    )
}

export default SoundToggle