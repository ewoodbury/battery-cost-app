import React, { useState } from "react";
import Slider from "./Slider";

function CellInput() {
  const [myState, setMyState] = useState({ range: 70, range2: 80 });

  function handleChange(id) {
    return (event) => setMyState({ ...myState, [id]: event.target.value });
  }

  return (
    <div id="cell-input" className="container">
      <h3 className="card-header">Cell</h3>
      <p className="card-description">Enter cell parameters:</p>
      <form>
        <Slider
          label="Range"
          id="range"
          value={myState.range}
          handleChange={handleChange}
          min="0"
          max="100"
        />
        <Slider
          label="Range2"
          id="range2"
          value={myState.range2}
          handleChange={handleChange}
          min="0"
          max="200"
        />
      </form>
    </div>
  );
}

export default CellInput;
