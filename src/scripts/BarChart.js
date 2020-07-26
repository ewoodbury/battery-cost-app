import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart(props) {
  const backgroundColors = [
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
  ];
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }],
    },
  };
  // console.log(Object.values(props.results.cost)[0]);
  let datasets = [];
  for (let i = 0; i < Object.keys(props.results.cost).length; i++) {
    datasets.push({
      label: [Object.keys(props.results.cost)[i]],
      data: [Object.values(props.results.cost)[i], 15],
      backgroundColor: backgroundColors[i],
    });
  }
  const data = {
    datasets: datasets,
    labels: ["Bob", "NMC 811"],
  };
  // console.log(data.labels);
  // console.log(data.datasets[0]);
  return (
    <div id="bar-section" className="container">
      <h3 className="card-header">Compare</h3>
      <div id="bar-chart">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChart;
