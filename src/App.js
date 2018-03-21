import React, { Component } from "react";
import DolphinCard from "./components/DolphinCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import dolphins from "./dolphins.json";
import "./App.css";

class App extends Component {
  // Setting this.state.dolphins to the dolphins json array
  state = {
    dolphins: dolphins,
    message: "Click an image to begin!",
    topScore: 0,
    curScore: 0,
    chosenDolphins: dolphins
  };

  setSelected = id => {
    // Filter this.state.dolphins for the clicked dolphin
    const dolphins = this.state.dolphins.filter(dolphin => dolphin.id === id);
    // Set this.state.dolphins equal to the new dolphins array
    this.setState({ dolphins });
  };

  // Map over this.state.dolphins and render a DolphinCard component for each friend object
  render() {
    return (
  
      <Wrapper>
      <div>
      <nav class="row navbar fixed-top navbar-dark bg-primary py-3">
          <div class="col-4 nav-item">
            <a class="nav-link" href="/clicky-dolphin"><h1>Clicky Dolphin</h1></a>
          </div>
          <div class="col-4 nav-item">
            <h2>{this.state.message}</h2>
          </div>
      </nav>
      <div class="row justify-content-center">
        <div class="col-12 jumbotron text-center">
          <h1>Click a dolphin to start</h1>
          <h2>But don't click the same dolphin twice!</h2>
        </div>
      </div>
        <div class="container">
          <div class ="row justify-content-center">
            {this.state.dolphins.map(dolphin => (
            <DolphinCard
              setSelected={this.setSelected}
              id={dolphin.id}
              key={dolphin.id}
              image={dolphin.image}
            />
          ))}
          </div>
        </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
