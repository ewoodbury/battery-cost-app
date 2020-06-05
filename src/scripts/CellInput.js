import React, { useState } from "react";
import Slider from "./Slider";
// import cellParameters from "../data/cellParameters.js";

function CellInput() {
  const [myState, setMyState] = useState({
    npRatio: 1.02,
    electrodeArea: 500,
    catCap: 170,
    catActiveFrac: 0.98,
  });
  // const [myState, setMyState] = useState({cellParameters})

  function handleChange(name) {
    return (event) => setMyState({ ...myState, [name]: event.target.value });
  }

  return (
    <div id="cell-input" className="container">
      <h3 className="card-header">Cell</h3>
      <p className="card-description">Enter cell parameters:</p>
      <form>
        <Slider
          name="npRatio"
          label="N-P Ratio"
          value={myState.npRatio}
          handleChange={handleChange}
          min="0.8"
          max="1.2"
          step="0.01"
          unit=""
        />
        <Slider
          name="electrodeArea"
          label="Electrode Surface Area"
          value={myState.electrodeArea}
          handleChange={handleChange}
          min="0"
          max="5000"
          step="1"
          unit="cm2"
        />
        <Slider
          name="catCap"
          label="Cathode Capacity"
          value={myState.catCap}
          handleChange={handleChange}
          min="0"
          max="400"
          step="1"
          unit="mAh/g"
        />
        <Slider
          name="catActiveFrac"
          label="Cathode Active Fraction"
          value={myState.catActiveFrac}
          handleChange={handleChange}
          min="0.9"
          max="1"
          step=".01"
          unit=""
        />
      </form>
    </div>
  );
}

export default CellInput;
