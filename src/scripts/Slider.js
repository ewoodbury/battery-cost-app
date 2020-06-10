import React from "react";

function Slider(props) {
  return (
    <label>
      <span
        className={`slider-label ${
          props.enabled ? "" : "slider-label-disabled"
        }`}
      >
        {props.label}{" "}
      </span>
      <span className="slider-unit">
        {props.unit ? <span> - {props.unit}</span> : ""}
      </span>
      <div className="slider-section">
        <input
          name={props.name}
          className={`slider ${props.enabled ? "" : "slider-disabled"}`}
          type="range"
          value={props.value}
          min={props.min}
          max={props.max}
          step={props.step}
          onChange={
            props.enabled
              ? props.handleChange(props.name)
              : () => console.log("Slider is disabled")
          }
        />
        <input
          className={`slider-value ${
            props.enabled ? "" : "slider-value-disabled"
          }`}
          type="number"
          value={props.value}
          min={props.min}
          max={props.max}
          step={props.step}
          onChange={
            props.enabled
              ? props.handleChange(props.name)
              : () => console.log("Slider is disabled")
          }
        />
      </div>
    </label>
  );
}

export default Slider;
