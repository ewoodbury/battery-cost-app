import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart(props) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  const data = {
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
    ],
  };
  return (
    <div id="pie-section" className="container">
      <h3 className="card-header">Cost Breakdown</h3>
      <div id="pie-chart">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default PieChart;
