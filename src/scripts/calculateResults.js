function calculateResults(cellParams, priceParams) {
  //////////////////////////////////////////////////
  // Section 0: Cache the data
  let cellData = {};
  let priceData = {};
  //Initialize cellData object using forEach, which loops through cellParams
  cellParams.forEach((param) => (cellData[param.name] = param.value));
  priceParams.forEach((param) => (priceData[param.name] = param.value));

  //////////////////////////////////////////////////
  //Section 1: Calculate Material Masses
  //All masses in grams
  let catTotalMass = 2 * (0.001 * cellData.catLoading) * cellData.electrodeArea;
  let catActiveMass = catTotalMass * cellData.catActiveFrac;
  let catBinderMass = (catTotalMass * (1 - cellData.catActiveFrac)) / 2;
  let catConductorMass = (catTotalMass * (1 - cellData.catActiveFrac)) / 2;
  let catCellCap = catActiveMass * cellData.catCap; //mAh
  let anCellCap = catCellCap * cellData.npRatio; //mAh
  let anActiveMass = anCellCap / cellData.anCap;
  let anTotalMass = anActiveMass / cellData.anActiveFrac;
  let anBinderMass = (anTotalMass * (1 - cellData.anActiveFrac)) / 2;
  let anConductorMass = (anTotalMass * (1 - cellData.anActiveFrac)) / 2;

  //////////////////////////////////////////////////
  //Section 2: Calculate Costs per cell
  let c_catActiveMass = catActiveMass * (priceData.catActive * 0.001);
  let c_catBinder = catBinderMass * (priceData.catBinder * 0.001);
  let c_catConductor = catConductorMass * (priceData.catConductor * 0.001);
  let c_anActiveMass = anActiveMass * (priceData.anActive * 0.001);
  let c_anBinder = anBinderMass * (priceData.anBinder * 0.001);
  let c_anConductor = anConductorMass * (priceData.anConductor * 0.001);
  let c_electrolyte = priceData.electrolyte;
  let c_can = priceData.can;
  let c_sep = priceData.sep;
  let c_cellManufacturing = priceData.cellManufacturing;
  let c_alFoil = priceData.alFoil;
  let c_cuFoil = priceData.cuFoil;
  let c_packCosts = priceData.packCosts;

  //////////////////////////////////////////////////
  //Section 3: Calculate Costs per kWh
  let cellEnergy = (catCellCap / 1000) * cellData.avgDisVoltage; //Wh
  let cellsPerKwh = 1000 / cellEnergy;

  let c_catActiveMass_kwh = cellsPerKwh * c_catActiveMass;
  let c_catBinder_kwh = cellsPerKwh * c_catBinder;
  let c_catConductor_kwh = cellsPerKwh * c_catConductor;
  let c_anActiveMass_kwh = cellsPerKwh * c_anActiveMass;
  let c_anBinder_kwh = cellsPerKwh * c_anBinder;
  let c_anConductor_kwh = cellsPerKwh * c_anConductor;
  let c_electrolyte_kwh = cellsPerKwh * c_electrolyte;
  let c_can_kwh = cellsPerKwh * c_can;
  let c_sep_kwh = cellsPerKwh * c_sep;
  let c_cellManufacturing_kwh = cellsPerKwh * c_cellManufacturing;
  let c_alFoil_kwh = cellsPerKwh * c_alFoil;
  let c_cuFoil_kwh = cellsPerKwh * c_cuFoil;
  let c_packCosts_kwh = cellsPerKwh * c_packCosts;

  const c_totalCellLevel =
    c_catActiveMass_kwh +
    c_catBinder_kwh +
    c_catConductor_kwh +
    c_anBinder_kwh +
    c_anActiveMass_kwh +
    c_anConductor_kwh +
    c_electrolyte_kwh +
    c_can_kwh +
    c_sep_kwh +
    c_cellManufacturing_kwh +
    c_alFoil_kwh +
    c_cuFoil_kwh;
  const c_totalPackLevel = c_totalCellLevel + c_packCosts_kwh;

  let results = {
    cost: {
      catActiveMass: c_catActiveMass_kwh.toFixed(2),
      catBinder: c_catBinder_kwh.toFixed(2),
      catConductor: c_catConductor_kwh.toFixed(2),
      anActiveMass: c_anActiveMass_kwh.toFixed(2),
      anBinder: c_anBinder_kwh.toFixed(2),
      anConductor: c_anConductor_kwh.toFixed(2),
      electrolyte: c_electrolyte_kwh.toFixed(2),
      can: c_can_kwh.toFixed(2),
      sep: c_sep_kwh.toFixed(2),
      cellManufacturing: c_cellManufacturing_kwh.toFixed(2),
      alFoil: c_alFoil_kwh.toFixed(2),
      cuFoil: c_cuFoil_kwh.toFixed(2),
      packCosts: c_packCosts_kwh.toFixed(2),
    },
    statistics: {
      totalCellLevelCost: c_totalCellLevel.toFixed(2),
      totalPackLevelCost: c_totalPackLevel.toFixed(2),
      cellEnergy: cellEnergy.toFixed(1),
    },
  };
  return results;
}

export default calculateResults;
