import React from "react";

class CellInput extends React.Component {
  constructor() {
    super();
    this.state = {
      range: "70",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      range: event.target.value,
    });
  }

  render() {
    return (
      <div id="cell-input" className="container">
        <h3 className="card-header">Cell</h3>
        <p className="card-description">Enter cell parameters:</p>
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
            <input
              type="text"
              name="catLoading"
              placeholder="Cathode Loading"
            />
          </label>
          <br />
          <label>
            Anode Loading (mg/cm2)
            <input type="text" name="anLoading" placeholder="Anode Loading" />
          </label>
          <br />
          <br />

          <label>
            <span>Slider </span>
            <span className="slider-unit">- mAh/g</span>
            <div className="slider-section">
              <input
                id="blankInput"
                className="slider"
                type="range"
                value={this.state.range}
                min="0"
                max="100"
                onChange={this.handleChange}
              />
              <input
                id="blankValue"
                className="slider-value"
                type="number"
                value={this.state.range}
                min="0"
                max="100"
                onChange={this.handleChange}
              />
            </div>
          </label>

          <label>
            <span>Slider </span>
            <span className="slider-unit">- mAh/g</span>
            <div className="slider-section">
              <input
                id="blankInput"
                className="slider"
                type="range"
                value={this.state.range}
                min="0"
                max="100"
                onChange={this.handleChange}
              />
              <input
                id="blankValue"
                className="slider-value"
                type="number"
                value={this.state.range}
                min="0"
                max="100"
                onChange={this.handleChange}
              />
              <span className="bar" />
            </div>
          </label>
        </form>
      </div>
    );
  }
}

export default CellInput;
