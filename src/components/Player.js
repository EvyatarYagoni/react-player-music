import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player-container">
      <div className="time-control">
        <p className="time-control__time">Start Time</p>
        <input type="range" className="time-control__range" />
        <p className="time-control__time">End Time</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          className="play-control__skip-forward"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          className="play-control__play"
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon
          className="play-control__skip-back"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
