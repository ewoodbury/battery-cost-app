import React from "react";

function Slider(props) {
  return (
    <label>
      <span>{props.label} </span>
      <span className="slider-unit">
        {props.unit ? <span> - {props.unit}</span> : ""}
      </span>
      <div className="slider-section">
        <input
          name={props.name}
          className="slider"
          type="range"
          value={props.value}
          min={props.min}
          max={props.max}
          step={props.step}
          onChange={props.handleChange(props.name)}
        />
        <input
          className="slider-value"
          type="number"
          value={props.value}
          min={props.min}
          max={props.max}
          step={props.step}
          onChange={props.handleChange(props.name)}
        />
      </div>
    </label>
  );
}

export default Slider;
