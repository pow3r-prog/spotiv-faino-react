import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls'
import Details from './Details'

const Player = (props) => {
    const audioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    // const [volume, setVolume] = useState(50)
    // const handleVolumeChange = (event, newValue) => {
    //     setVolume(newValue);
    // };

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play()
        } else {
            audioEl.current.pause()
        }
    })

    // useEffect(() => {
    //     audioEl.current.volume = volume / 100
    // })

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex
                temp++

                if (temp > props.songs.length - 1) {
                    temp = 0
                }

                return temp
            })
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex
                temp--

                if (temp < 0) {
                    temp = props.songs.length - 1
                }

                return temp
            });
        }
    }
    return (
        <div className="player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <Details song={props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />

        </div>
    )
}

export default Player
