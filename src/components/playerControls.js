import React from "react";
import './style.css'

function PlayerControls() {
  return (
    <div>
      <div className="controls">
        <button className="btn"><i class="fas fa-backward"></i></button>
        <button className="btn"><i class="fas fa-play"></i></button>
        <button className="btn"><i class="fas fa-forward"></i></button>
      </div>
    </div>
  );
}

export default PlayerControls;
