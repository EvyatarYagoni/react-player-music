import React, { useState } from "react";

// Import styles
import "./styles/app.scss";
// Add components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
// Import utils
import data from "./util";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />

      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
