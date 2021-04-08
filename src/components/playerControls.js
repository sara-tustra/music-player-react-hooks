import React from "react";
import { Backward, Forward, Pause, Play, Random, Repeat } from "./icons";
import './style.css'

function PlayerControls(props) {
  return (
    <div>
      <div className="controls">
      <button className="btn" > <Random/> </button>
        <button className="btn" onClick={() => props.SkipSong(false)}> <Backward/> </button>
        <button className="btn"onClick={()=> props.setIsPlaying(!props.isPlaying)}>
          {
            props.isPlaying ? <Pause/> : <Play/>
          }
          </button>
        <button className="btn"onClick={() => props.SkipSong()}> <Forward/></button>
        <button className="btn"> <Repeat/> </button>
      </div>
    </div>
  );
}

export default PlayerControls;
