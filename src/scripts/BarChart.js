import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
  const data1 = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "a",
        data: [4, 5, 6],
        fill: true,
        backgroundColor: "#D6E9C6", // green
      },

      { label: "b", data: [7, 8, 9], fill: false, backgroundColor: "#EBCCD1" },
      { label: "c", data: [5, 9, 8], fill: false, backgroundColor: "#FAEBCC" },
    ],
  };
  return (
    <div id="bar-section" className="container">
      <h3 className="card-header">Compare Results</h3>
      <div id="bar-chart">
        <Bar
          data={data1}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
}

export default BarChart;
