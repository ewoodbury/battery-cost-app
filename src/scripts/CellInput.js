import React from "react";

function CellInput() {
  return (
    <div>
      <h3>Cell Input</h3>
      <form>
        <label>
          Cathode Specific Capacity
          <input
            type="text"
            name="catCap"
            placeholder="Cathode Specific Capacity"
          />
        </label>
        <br />
        <label>
          Anode Specific Capacity
          <input
            type="text"
            name="anCap"
            placeholder="Anode Specific Capacity"
          />
        </label>
        <br />
        <label>
          Cathode Loading (mg/cm2)
          <input type="text" name="catLoading" placeholder="Cathode Loading" />
        </label>
        <br />
        <label>
          Anode Loading (mg/cm2)
          <input type="text" name="anLoading" placeholder="Anode Loading" />
        </label>
        <br />
      </form>
    </div>
  );
}

export default CellInput;
