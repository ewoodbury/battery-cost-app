import React from "react";

function Statistics(props) {
  return (
    <div id="statistics" className="container">
      <h3 id="statistics-header" className="card-header">
        Statistics
      </h3>

      <div id="statistics-container">
        <span className="stat-item">
          <span className="stat-number">
            {props.results.statistics.cellEnergy}
          </span>
          <span className="stat-unit">Wh</span>
          <br />
          <span className="stat-caption">Energy per cell</span>
        </span>
        <span className="stat-item">
          <span className="stat-number">
            ${props.results.statistics.totalCellLevelCost}
          </span>
          <span className="stat-unit">per kWh</span>
          <br />
          <span className="stat-caption">Cell-level cost</span>
        </span>
        <span className="stat-item">
          <span className="stat-number">
            ${props.results.statistics.totalPackLevelCost}
          </span>
          <span className="stat-unit">per kWh</span>
          <br />
          <span className="stat-caption">Pack-level cost</span>
        </span>
      </div>
    </div>
  );
}

export default Statistics;
