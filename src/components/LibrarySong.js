import { faPause } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  id,
  setSongs,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);

    //Add Active State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    playAudio(isPlaying, audioRef);

    setSongs(newSongs);
    //Check if the somg is palying
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
    // audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3 className="library-songs__song-name">{song.name}</h3>
        <h4 className="library-songs__song-arist">{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
