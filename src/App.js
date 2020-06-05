import React from "react";
import "./App.css";
import CellInput from "./scripts/CellInput.js";
import PriceInput from "./scripts/PriceInput.js";
import Statistics from "./scripts/Statistics.js";
import PieChart from "./scripts/PieChart.js";
import BarChart from "./scripts/BarChart.js";

function App() {
  return (
    <div>
      <div id="header">
        <div id="title">
          <h1>BatteryCost.app</h1>
        </div>
        <div id="intro">
          <p>An app for modeling the cost of lithium-ion batteries</p>
        </div>
      </div>
      <div className="content">
        <CellInput />
        <PriceInput />
        <Statistics />
        <PieChart />
        <BarChart />
      </div>
    </div>
  );
}

export default App;
