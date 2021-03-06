import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./scripts/Header.js";
import CellInput from "./scripts/CellInput.js";
import PriceInput from "./scripts/PriceInput.js";
import Statistics from "./scripts/Statistics.js";
import PieChart from "./scripts/PieChart.js";
import BarChart from "./scripts/BarChart.js";
import Footer from "./scripts/Footer.js";
import cellParameters from "./data/cellParameters.js";
import priceParameters from "./data/priceParameters.js";
import cellPresets from "./data/cellPresets.js";
import pricePresets from "./data/pricePresets.js";
import calculateResults from "./scripts/calculateResults.js";

function App() {
  const [myState, setMyState] = useState({
    cellParams: cellParameters,
    priceParams: priceParameters,
    results: {
      cost: {},
      statistics: {},
    },
  });

  function getCellData(data) {
    return setMyState({ ...myState, cellParams: data });
  }
  function getPriceData(data) {
    return setMyState({ ...myState, priceParams: data });
  }

  useEffect(() => {
    let results = calculateResults(myState.cellParams, myState.priceParams);
    setMyState({ ...myState, results: results });
    // eslint-disable-next-line
  }, [myState.cellParams, myState.priceParams]);

  let resultsList = [];
  for (let i = 0; i < 3; i++) {
    let thisResults = calculateResults(
      cellPresets[i].params,
      pricePresets[i].params
    );
    resultsList.push(thisResults);
  }

  return (
    <div>
      <Header />
      <div className="content">
        <CellInput cellData={myState.cellParams} getCellData={getCellData} />
        <PriceInput
          priceData={myState.priceParams}
          getPriceData={getPriceData}
        />
        <Statistics results={myState.results} />
        <PieChart results={myState.results} />
        <BarChart
          results={myState.results}
          resultsPresets={resultsList}
          cellPresets={cellPresets}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
