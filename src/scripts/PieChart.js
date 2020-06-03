import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart() {
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
    <div id="pie-chart">
      <h3>View Result</h3>
      <p>Pie chart here</p>
      <Pie
        data={data1}
        options={{ maintainAspectRatio: false }}
        // height={10}
        width={10}
      />
    </div>
  );
}

export default PieChart;
