import React from "react";

function PriceInput() {
  return (
    <div id="price-input" className="container">
      <h3 className="card-header">Prices</h3>
      <p className="card-description">Enter prices:</p>
      <form>
        <label>
          Cathode Active Material ($/kg)
          <input type="text" name="catActiveP" placeholder="Cathode Price" />
        </label>
        <br />
        <label>
          Anode Active Material ($/kg)
          <input type="text" name="anActiveP" placeholder="Anode Price" />
        </label>
        <br />
        <label>
          Cell Manufacturing ($/cell)
          <input
            type="text"
            name="cellManufacturingP"
            placeholder="Manufacturing"
          />
        </label>
        <br />
        <label>
          Pack Integration ($/cell)
          <input
            type="text"
            name="packIntegrationP"
            placeholder="Pack Integration"
          />
        </label>
        <br />
      </form>
    </div>
  );
}

export default PriceInput;
