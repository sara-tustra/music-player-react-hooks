import React from "react";
import PlayerControls from "./playerControls";
import "./style.css";
import castle from './images/castle.jpeg'


const songs = [
            { "id":1, "category":"game", "image": "src/components/images/castle.jpeg", "name":"Mario Castle", "url":"files/mario/songs/castle.mp3" },
            { "id":2, "category":"game", "image": "src/components/images/star.jpeg", "name":"Mario Star", "url":"files/mario/songs/hurry-starman.mp3"},
            { "id":3, "category":"game", "image": "src/components/images/overworld.jpeg", "name":"Mario Overworld", "url":"files/mario/songs/overworld.mp3"}
        ];
   
        const renderSongs = songs.map((singleSong, i) =>{
            return <tr><th className="p-3 m-4" key={i}>{singleSong.id}. {singleSong.name}</th></tr>
        })

        const songURL = "https://assets.breatheco.de/apis/sound/" + "files/mario/songs/castle.mp3";

const Player = (props) => {
  return (
    <div className="container-fluid" id="player">
      <div className="table-responsive pt-5">
        <table className="table">
          <tbody>{renderSongs}</tbody>
        </table>
      </div>
      <h4 className="m-4 p-4">Playing Now</h4>
      <div className="row mx-auto">
      <img className="rounded-circle" src={castle}/>
      </div>
      <audio controls>
          <source src={songURL}/>
      </audio>

      <p className="p-2 m-3">
        <strong>Next up:</strong> Blablabla
      </p>
      <PlayerControls />
    </div>
  );
};

export default Player;
