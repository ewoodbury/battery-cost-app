import React, { useState } from "react";
import Slider from "./Slider";

function PriceInput(props) {
  const [myState, setMyState] = useState({ params: props.priceData });

  function handleChange(name) {
    return (event) => {
      const updatedParameters = myState.params.map((param) => {
        if (param.name === name) {
          param.value = event.target.value;
        }
        return param;
      });
      setMyState({ params: updatedParameters });
      props.getPriceData(myState.params);
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
    <div id="price-input" className="container">
      <h3 className="card-header">Prices</h3>
      <p className="card-description">Enter prices:</p>
      <form>{parameterList}</form>
    </div>
  );
}

export default PriceInput;
