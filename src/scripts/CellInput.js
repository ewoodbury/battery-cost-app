import React, { useState } from "react";
import Slider from "./Slider";

function CellInput(props) {
  const [myState, setMyState] = useState({ params: props.cellData });

  function handleChange(name) {
    return (event) => {
      const updatedParameters = myState.params.map((param) => {
        if (param.name === name) {
          param.value = event.target.value;
        }
        return param;
      });
      setMyState({ params: updatedParameters });
      props.getCellData(myState.params);
    };
  }

  const parameterList = myState.params.map((param) => (
    <Slider
      key={param.name}
      name={param.name}
      label={param.label}
      unit={param.unit}
      value={param.value}
      min={param.min}
      max={param.max}
      step={param.step}
      enabled={param.enabled}
      handleChange={handleChange}
    />
  ));

  return (
    <div id="cell-input" className="container">
      <h3 className="card-header">Cell</h3>
      <p className="card-description">Enter cell parameters:</p>
      <form>{parameterList}</form>
    </div>
  );
}

export default CellInput;
