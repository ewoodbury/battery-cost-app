const cellParameters = [
  {
    name: "npRatio",
    label: "N-P Ratio",
    unit: "",
    value: 1.02,
    min: 0.75,
    max: 1.25,
    step: 0.01,
  },
  {
    name: "electrodeArea",
    label: "Electrode Surface Area",
    unit: "cm2 per cell",
    value: 500,
    min: 0,
    max: 5000,
    step: 1,
  },
  {
    name: "catCap",
    label: "Cathode Capacity",
    unit: "mAh/g",
    value: 170,
    min: 0,
    max: 400,
    step: 1,
  },
  {
    name: "catActiveFrac",
    label: "Cathode Active Fraction",
    unit: "",
    value: 0.98,
    min: 0,
    max: 400,
    step: 0.01,
  },
];

export default cellParameters;
