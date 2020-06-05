import React from "react";

function Slider(props) {
  return (
    <label>
      <span>{props.label} </span>
      <span className="slider-unit">- mAh/g</span>
      <div className="slider-section">
        <input
          id={props.id}
          className="slider"
          type="range"
          value={props.value}
          min={props.min}
          max={props.max}
          onChange={props.handleChange(props.id)}
        />
        <input
          className="slider-value"
          type="number"
          value={props.value}
          min={props.min}
          max={props.max}
          onChange={props.handleChange(props.id)}
        />
      </div>
    </label>
  );
}

export default Slider;
