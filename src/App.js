import React, { useState } from "react";
import "./App.css";
import CellInput from "./scripts/CellInput.js";
import PriceInput from "./scripts/PriceInput.js";
import Statistics from "./scripts/Statistics.js";
import PieChart from "./scripts/PieChart.js";
import BarChart from "./scripts/BarChart.js";
import cellParameters from "./data/cellParameters.js";
import priceParameters from "./data/priceParameters.js";
import calculateResults from "./scripts/calculateResults.js";

function App() {
  const [myState, setMyState] = useState({
    cellParams: cellParameters,
    priceParams: priceParameters,
    results: {},
  });

  function getCellData(data) {
    return setMyState({ ...myState, cellParams: data });
  }
  function getPriceData(data) {
    return setMyState({ ...myState, priceParams: data });
  }

  let results = calculateResults(myState.cellParams, myState.priceParams);

  return (
    <div>
      <div id="header">
        <div id="title">
          <h1>BatteryCost.me</h1>
        </div>
        <div id="intro">
          <p>An app for modeling the cost of lithium-ion batteries</p>
        </div>
      </div>
      <div className="content">
        <CellInput cellData={myState.cellParams} getCellData={getCellData} />
        <PriceInput
          priceData={myState.priceParams}
          getPriceData={getPriceData}
        />
        <Statistics cellData={myState.cellParams} />
        <PieChart cellData={myState.cellParams} />
        <BarChart />
      </div>
    </div>
  );
}

export default App;
