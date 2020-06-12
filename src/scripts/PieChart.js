import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart(props) {
  const data1 = {
    labels: Object.keys(props.results.cost),
    datasets: [
      {
        label: "a",
        data: Object.values(props.results.cost),
        fill: true,
        backgroundColor: [
          "#EF9A9A",
          "#B39DDB",
          "#9FA8DA",
          "#81D4FA",
          "#80CBC4",
          "#80DEEA",
          "#C5E1A5",
          "#E6EE9C",
          "#FFF59D",
          "#FFCC80",
          "#FFAB91",
          "#BCAAA4",
        ],
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
