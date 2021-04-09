import React, { useRef, useState, useEffect } from "react";
import ListOfSongs from "./listOfSongs";
import PlayerControls from "./playerControls";
import PlayerDetails from "./playerDetails";
import "./style.css";

const Player = (props) => {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
          console.log(Object.keys(props.songs));
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="container-fluid" id="player">
      <audio
        ref={audioElement}
        src={props.songs[props.currentSongIndex].url}
      ></audio>
      <ListOfSongs
        songs={props.songs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentSongIndex={props.setCurrentSongIndex}

      />
      <h4 className="m-3 p-3">Playing Now</h4>
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p className="p-2 m-3">
        <strong>Next up:</strong> {props.songs[props.nextSongIndex].name}
      </p>
    </div>
  );
};

export default Player;
