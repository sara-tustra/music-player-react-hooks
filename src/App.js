import React, { useState, useEffect } from "react";
import Player from "./components/player";
import castle from "./images/castle.jpeg";
import star from "./images/star.jpeg";
import overworld from "./images/overworld.jpeg";



const App =()=> {
    const [songs] = useState([
        {
          id: 1,
          category: "game",
          image: castle,
          name: "Mario Castle",
          url: "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3",
        },
        {
          id: 2,
          category: "game",
          image: star,
          name: "Mario Star",
          url: "https://assets.breatheco.de/apis/sound/files/mario/songs/hurry-starman.mp3",
        },
        {
          id: 3,
          category: "game",
          image: overworld,
          name: "Mario Overworld",
          url: "https://assets.breatheco.de/apis/sound/files/mario/songs/overworld.mp3",
        },
      ]);

      const [currentSongIndex, setCurrentSongIndex] = useState(0);
      const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

      useEffect(() => {
          setNextSongIndex (() => {
              if(currentSongIndex + 1 > songs.length - 1) {
                  return 0;
              } else {
                  return currentSongIndex + 1;
              }
          });
      }, [currentSongIndex]);
   
    return (
        <>
        <div className="App">
            <Player 
            currentSongIndex = {currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs} />
        </div>
        </>
    )
}


export default App;