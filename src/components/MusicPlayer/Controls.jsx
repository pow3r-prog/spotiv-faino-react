import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

const Controls = (props) => {
    return (
        <div className="player__controls">
            <div className="player__buttons">
                <div className='play__buttons'>
                    <button className="skip__btn" onClick={() => props.SkipSong(false)}>
                        <FontAwesomeIcon icon={faBackward} />
                    </button>
                    <button className="play__btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
                    </button>
                    <button className="skip__btn" onClick={() => props.SkipSong()}>
                        <FontAwesomeIcon icon={faForward} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Controls