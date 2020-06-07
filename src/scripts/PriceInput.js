import React, { useState } from "react";
import Slider from "./Slider";

function PriceInput() {
  const [myState, setMyState] = useState({
    npRatio: 1.02,
    electrodeArea: 500,
    catCap: 170,
    catActiveFrac: 0.98,
  });

  function handleChange(name) {
    return (event) => setMyState({ ...myState, [name]: event.target.value });
  }

  return (
    <div id="price-input" className="container">
      <h3 className="card-header">Prices</h3>
      <p className="card-description">Enter prices:</p>
      <form>
        <Slider
          name="npRatio"
          label="N-P Ratio"
          value={myState.npRatio}
          handleChange={handleChange}
          min="0.8"
          max="1.2"
          step="0.01"
          unit=""
        />
        <Slider
          name="electrodeArea"
          label="Electrode Surface Area"
          value={myState.electrodeArea}
          handleChange={handleChange}
          min="0"
          max="5000"
          step="1"
          unit="cm2"
        />
        <Slider
          name="catCap"
          label="Cathode Capacity"
          value={myState.catCap}
          handleChange={handleChange}
          min="0"
          max="400"
          step="1"
          unit="mAh/g"
        />
        <Slider
          name="catActiveFrac"
          label="Cathode Active Fraction"
          value={myState.catActiveFrac}
          handleChange={handleChange}
          min="0.9"
          max="1"
          step=".01"
          unit=""
        />
      </form>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        eleifend ornare dui, sed semper enim euismod a. Curabitur eget dapibus
        ex. Sed commodo, nibh quis tempus accumsan, mauris dui rutrum odio, eget
        malesuada dolor tellus maximus libero. Suspendisse dignissim nulla non
        maximus interdum. Cras vestibulum sagittis magna ac aliquam. Aenean
        gravida non sem et suscipit. Mauris auctor tempor quam vitae consequat.
        Integer vestibulum blandit tincidunt. Nam diam augue, vestibulum vitae
        felis a, efficitur mollis purus. Suspendisse facilisis ex vitae neque
        rutrum varius. Donec at leo ac lacus efficitur sollicitudin nec non
        tortor. Duis venenatis, sapien nec convallis semper, urna arcu venenatis
        ante, quis tincidunt mi eros vitae massa. Nullam tellus nisi, elementum
        id laoreet in, cursus quis libero. Mauris sollicitudin lacus at
        facilisis malesuada. Aliquam vulputate nunc eget gravida consectetur.
        Cras malesuada felis sit amet diam sollicitudin malesuada. Nullam
        pulvinar feugiat congue. Sed et mattis massa. Donec finibus purus vitae
        quam elementum iaculis. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Nulla sagittis a tortor sed
        vehicula. Vestibulum velit elit, rutrum vitae ullamcorper quis,
      </p>
    </div>
  );
}

export default PriceInput;
