import { useState, useEffect } from "react"
import Player from "./components/Player"

function App() {

  const [songs] = useState([
    {
      title: "Antidote",
      artist: "Travis Scott",
      img_src: "./images/antidote.png",
      src: "./music/Travis-Scott-Antidote.mp3"
    },
    {
      title: "When It Rains It Pours",
      artist: "50 Cent",
      img_src: "./images/50cent.png",
      src: "./music/50-Cent-When-It-Rains-It-Pours.mp3"
    },
    {
      title: "Racks In The MIddle",
      artist: "Nipsey Hussle ft. Roddy Ricch",
      img_src: "./images/racks.png",
      src: "./music/Nipsey-Hussle-Racks-In-The-Middle-Roddy-Ricch.mp3"
    },
    {
      title: "F*F*M",
      artist: "Filipe Ret",
      img_src: "./images/ffm.png",
      src: "./music/Filipe-Ret-FFM.mp3"
    },
    {
      title: "Anota a Placa",
      artist: "TZ DA CORONEL ft. VINTA",
      img_src: "./images/tz.png",
      src: "./music/TZ-DA-CORONEL-ANOTA-PLACA-FT-VINTA.mp3"
    },
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else { 
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex, setCurrentSongIndex, songs.length])

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
