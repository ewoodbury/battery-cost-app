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
  let c_packCosts_kwh = cellsPerKwh * c_packCosts;

  let results = {
    catActiveMass: c_catActiveMass_kwh,
    catBinder: c_catBinder_kwh,
    catConductor: c_catConductor_kwh,
    anActiveMass: c_anActiveMass_kwh,
    anBinder: c_anBinder_kwh,
    anConductor: c_anConductor_kwh,
    electrolyte: c_electrolyte_kwh,
    can: c_can_kwh,
    sep: c_sep_kwh,
    packCosts: c_packCosts_kwh,
  };
  return results;
}

export default calculateResults;