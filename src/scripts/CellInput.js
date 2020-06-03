import React from "react";

function CellInput() {
  return (
    <div id="cell-input">
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
      {/* <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
        inventore commodi fuga ex voluptate nemo harum labore? Ullam
        necessitatibus officia nulla quas laudantium laborum? Quis vero tempore
        aut quia consequatur. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Consequatur inventore commodi fuga ex voluptate nemo
        harum labore? Ullam necessitatibus officia nulla quas laudantium
        laborum? Quis vero tempore aut quia consequatur.Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Consequatur inventore commodi fuga ex
        voluptate nemo harum labore? Ullam necessitatibus officia nulla quas
        laudantium laborum? Quis vero tempore aut quia consequatur.Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Consequatur inventore
        commodi fuga ex voluptate nemo harum labore? Ullam necessitatibus
        officia nulla quas laudantium laborum? Quis vero tempore aut quia
        consequatur.
      </p> */}
    </div>
  );
}

export default CellInput;
