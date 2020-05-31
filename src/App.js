import React from "react";
import Input from "./scripts/Input.js";
import Dashboard from "./scripts/Dashboard.js";
import PieResult from "./scripts/PieResult.js";
import BarResult from "./scripts/BarResult.js";

function App() {
  return (
    <div>
      <h1>BatteryCost.app</h1>
      <p>An application for modeling the cost of lithium-ion batteries.</p>
      <p>by Ethan Woodbury</p>

      <Input />
      <Dashboard />
      <PieResult />
      <BarResult />
    </div>
  );
}

export default App;
