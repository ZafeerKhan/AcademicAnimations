import React, { Component } from "react";
import P5Wrapper from "../P5Wrapper/";
//import Equation from "../Equation";
import ReactBootstrapSlider from 'react-bootstrap-slider';
import "./index.css";

export default class App extends Component {
  constructor() {
    super();
    this.state =
    {
      status: "",
      colSlider: 10,
      rowSlider: 10,
      colValue: null,
      rowValue: null,
      equation: ""
    };
  }


  getColValue = (colValue) => this.setState({ colValue });

  getRowValue = (rowValue) => this.setState({ rowValue });

  onReady = () => this.setState({ status: "ready" });

  onSliderColChange = (event) => this.setState({ colSlider: +event.target.value });

  onSliderRowChange = (event) => this.setState({ rowSlider: +event.target.value });

  onEquationChange = (event) => this.setState({ equation: event.target.value });


  render() {
    return (
      <div className="app">
        <P5Wrapper
          p5Props={
            {
              colSlider: this.state.colSlider,
              rowSlider: this.state.rowSlider,
            }}
          getColValue={this.getColValue}
          getRowValue={this.getRowValue}
          onReady={this.onReady}
        />
        <div style={{ textAlign: "center" }}>
          <strong>{this.state.colSlider}</strong>
          <br />
          <input type="range"
            min={5} max={30} step={1}
            value={this.state.colSlider}
            className = "wpcontent_slider_container"
            onChange={this.onSliderColChange}
          />

          <br />
          <strong>{this.state.rowSlider}</strong>
          <input type="range"
            min={5} max={30} step={1}
            value={this.state.rowSlider}
            className = "wpcontent_slider_container"
            onChange={this.onSliderRowChange}
          />

        <input type="text"
            value={this.state.equation}
            onChange={this.onEquationChange}
          />
        <strong>{this.state.equation}</strong>


        </div>

      </div>
    );
  }
}
