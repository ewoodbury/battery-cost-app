import React, { useState, useEffect } from "react";
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
    results: {
      cost: {},
      statistics: {},
    },
  });

  function getCellData(data) {
    return setMyState({ ...myState, cellParams: data });
  }
  function getPriceData(data) {
    return setMyState({ ...myState, priceParams: data });
  }

  useEffect(() => {
    let results = calculateResults(myState.cellParams, myState.priceParams);
    setMyState({ ...myState, results: results });
    // eslint-disable-next-line
  }, [myState.cellParams, myState.priceParams]);

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
        <Statistics results={myState.results} />
        <PieChart results={myState.results} />
        <BarChart />

        <div id="credit-section">
          <p className="credit">Created by Ethan Woodbury</p>
          <a
            className="github"
            target="_blank"
            href="https://github.com/ewoodbury/battery-cost-app"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
