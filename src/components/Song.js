import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song-conainer">
      <img alt="currentSong.name" src={currentSong.cover}></img>
      <h3 className="song-conainer__song-name">{currentSong.name}</h3>
      <h4 className="song-conainer__song-arist">{currentSong.artist}</h4>
    </div>
  );
};

export default Song;
