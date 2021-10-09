import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls'
import Details from './Details'
import Slider from '@mui/material/Slider'


const Player = (props) => {
    const audioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(50)
    const [seekTime, setSeekTime] = useState(0)
    const [currTime, setCurrTime] = useState(0)
    const [duration, setDurationTime] = useState(0)
    
    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue)
    }
    const handleSeekChange = (event, newValue) => {
        audioEl.current.currentTime =(newValue*duration)/100
        setSeekTime(newValue)
    }

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play()
        } else {
            audioEl.current.pause()
        }
    })

    useEffect(() => {
        audioEl.current.volume = volume / 100
        audioEl.current.onloadeddata = () => {
            if (audioEl.current != null)
            setDurationTime(audioEl.current.duration)
        };
        setInterval(() => {
            if (audioEl.current !== null)
                setCurrTime(audioEl.current.currentTime)
        })
    })
    useEffect(() => {
        setSeekTime((currTime) / (duration / 100))
    }, [currTime, duration])

    function formatTime(secs) {
        const t = new Date(1970, 0, 1)
        t.setSeconds(secs)
        let s = t.toTimeString().substr(0, 8)
        if (secs > 86399)
            s = Math.floor((t - Date.parse("1/1/70")) / 3600000) + s.substr(2)
        return s.substring(3)
    }

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
            <div className="player__controls">
                <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
                <Slider style={{width: '60%'}}  value={seekTime} onChange={handleSeekChange}/>  
            </div>
            <div className="timer">
                <p>
                    <span>{formatTime(currTime)}</span>
                    /
                    <span>{formatTime(duration)}</span>
                </p>
            </div>
            <Slider style={{width: '7%', marginRight: '5%'}} value={volume} onChange={handleVolumeChange}/>
        </div>
    )

}

export default Player
