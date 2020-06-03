import React from "react";

function Dashboard() {
  return (
    <div id="dashboard" className="container">
      <h3 className="card-header">Statistics</h3>
      <p>
        <b>Cell Cost:</b> $100/kWh
      </p>
      <p>
        <b>Cell Energy:</b> 15 Wh
      </p>
    </div>
  );
}

export default Dashboard;
