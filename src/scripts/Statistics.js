import React from "react";

function Statistics() {
  return (
    <div id="statistics" className="container">
      <h3 id="statistics-header" className="card-header">
        Statistics
      </h3>

      <div id="statistics-container">
        <span className="stat-item">
          <span className="stat-number">15.3</span>
          <span className="stat-unit">Wh</span>
          <br />
          <span className="stat-caption">Energy per cell</span>
        </span>
        <span className="stat-item">
          <span className="stat-number">$120.85</span>
          <span className="stat-unit">per kWh</span>
          <br />
          <span className="stat-caption">Cell-level cost</span>
        </span>
        <span className="stat-item">
          <span className="stat-number">$142.11</span>
          <span className="stat-unit">per kWh</span>
          <br />
          <span className="stat-caption">Pack-level cost</span>
        </span>
      </div>
    </div>
  );
}

export default Statistics;
