const cellParameters = [
  {
    name: "npRatio",
    label: "N-P Ratio",
    unit: "",
    default: 1.02,
    min: 0.75,
    max: 1.25,
    step: 0.01,
  },
  {
    name: "electrodeArea",
    label: "Electrode Surface Area",
    unit: "cm2 per cell",
    default: 550,
    min: 0,
    max: 5000,
    step: 1,
  },
  {
    name: "catCap",
    label: "Cathode Capacity",
    unit: "mAh/g",
    default: 170,
    min: 0,
    max: 400,
    step: 1,
  },
  {
    name: "catActiveFrac",
    label: "Cathode Active Fraction",
    unit: "",
    default: 0.98,
    min: 0,
    max: 400,
    step: 1,
  },
];

export default cellParameters;
