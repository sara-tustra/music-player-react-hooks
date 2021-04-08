import React from "react";



const PlayerDetails = (props) => {
  return (
    <>
      <h5 className="p-1">{props.song.name}</h5>
      <div className="row mx-auto">
        <img className="rounded-circle" src={props.song.image} alt="song"/>
      </div>

      
    </>
  );
};

export default PlayerDetails;
