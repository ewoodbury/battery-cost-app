import React from "react";
import "./App.css";
import CellInput from "./scripts/CellInput.js";
import PriceInput from "./scripts/PriceInput.js";
import Dashboard from "./scripts/Dashboard.js";
import PieChart from "./scripts/PieChart.js";
import BarChart from "./scripts/BarChart.js";

function App() {
  return (
    <div>
      <div id="header">
        <h1>BatteryCost.app</h1>
        <p>An application for modeling the cost of lithium-ion batteries.</p>
      </div>
      <div className="content">
        <CellInput />
        <PriceInput />
        <Dashboard />
        <PieChart />
        <BarChart />
      </div>
    </div>
  );
}

export default App;
