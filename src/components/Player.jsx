import React, { useState, useRef, useEffect } from 'react'
import PlayerDetails from "./PlayerDetails"
import PlayerControls from "./PlayerControls"

const Player = (props) => {
    const audioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play()
        } else { 
            audioEl.current.pause()
        }
    })

    const skipSong = (forwards = true) => {
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
            })
        }
    } 

    return (
        <div>
            <div className="c-player">
                <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
                <h4>Playing Now</h4>
                <PlayerDetails song={props.songs[props.currentSongIndex]} />
                <PlayerControls  
                    isPlaying={isPlaying} 
                    setIsPlaying={setIsPlaying} 
                    skipSong={skipSong} 
                />

                <p><strong>Next Up: </strong>{props.songs[props.nextSongIndex].title} - {props.songs[props.nextSongIndex].artist}</p>
            </div>
        </div>
    )
}

export default Player
