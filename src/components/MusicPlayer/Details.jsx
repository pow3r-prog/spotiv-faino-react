import React from 'react'

const Details = (props) => {
    return (
        <div className="player__details">
            <div className="player__details_img">
                <img src={props.song.img_src} alt="" />
            </div>
            <div className="details__text">
                <div className="details__text_title">{props.song.title}</div>
                <div className="details__text_artist">{props.song.artist}</div>
            </div>
        </div>
    )
}

export default Details
