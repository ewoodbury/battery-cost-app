import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart(props) {
  const data1 = {
    labels: ["N-P Ratio", "Area", "Capacity"],
    datasets: [
      {
        label: "a",
        data: [
          props.cellData[0].value,
          props.cellData[1].value,
          props.cellData[2].value,
        ],
        fill: true,
        backgroundColor: ["#D6E9C6", "#EBCCD1", "#FAEBCC"], // green
      },

      // { label: "b", data: [7, 8, 9], fill: false, backgroundColor: "#EBCCD1" },
      // { label: "c", data: [5, 9, 8], fill: false, backgroundColor: "#FAEBCC" },
    ],
  };
  return (
    <div id="pie-section" className="container">
      <h3 className="card-header">Cost Breakdown</h3>
      <div id="pie-chart">
        <Pie
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

export default PieChart;
