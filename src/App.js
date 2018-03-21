import React, { Component } from "react";
import DolphinCard from "./components/DolphinCard";
import Wrapper from "./components/Wrapper";
import dolphins from "./dolphins.json";
import "./App.css";

let curScore = 0;
let topScore = 0;
let message = "Click an image to begin!";

class App extends Component {
  // Setting this.state.dolphins to the dolphins json array
  state = {
    dolphins,
    message,
    topScore,
    curScore
  };

  setSelected = id => {
    // Copy the dolphins array state
    const dolphins = this.state.dolphins;
    // Filter this.state.dolphins for the clicked dolphin
    const chosenDolphins = dolphins.filter(dolphin => dolphin.id === id);

    // If the dolphin has been picked, game over
    if (chosenDolphins[0].clicked) {
      curScore = 0;
      message = "Oh no! Same Dolphin!!";

      for (let i = 0; i < dolphins.length; i++) {
        dolphins[i].clicked = false;
      }
      
      this.setState({ message });
      this.setState({ curScore });
      this.setState({ dolphins });
    }
    // If the dolphin has not been clicked yet
    else if(curScore < 11 ) {
      // Set the clicked dolphin's clicked value to true
      chosenDolphins[0].clicked = true;
      // Increment curScore
      curScore++;
      message = "Wow! Haven't seen that dolphin before.";

      // Check topScore and update if curScore is higher
      if (curScore > topScore) {
        topScore = curScore;
        this.setState({ topScore });
      }

      // Shuffle the dolphins array to render in a random order
      dolphins.sort(() => (0.5 - Math.random()));

      this.setState({ dolphins });
      this.setState({ curScore });
      this.setState({ message });
    }
    else {
      chosenDolphins[0].clicked = true;
      // Restart the score
      curScore = 0;
      message = "You got them all! You must have memory like a dolphin...try again?";
      topScore = 12;
      this.setState({ topScore });

      for(let i = 0; i < dolphins.length; i++) {
        dolphins[i].clicked = false;
      }

      dolphins.sort(() => (0.5 - Math.random()));
      this.setState({ dolphins });
      this.setState({ curScore });
      this.setState({ message });
    }

   
  };

  // Map over this.state.dolphins and render a DolphinCard component for each friend object
  render() {
    return (
  
      <Wrapper>
      <div>
      <nav class="row navbar fixed-top navbar-dark bg-primary py-3">
          <div class="col-4 nav-item">
            <a class="nav-link" href="/clicky-dolphin"><h4>Clicky Dolphin</h4></a>
          </div>
          <div class="col-4 nav-item">
            <h5>{this.state.message}</h5>
          </div>
          <div class="col-4 nav-item">
            <h5>Score: {this.state.curScore} HighScore: {this.state.topScore}</h5>
          </div>
      </nav>
      <div class="row justify-content-center">
        <div class="col-12 jumbotron text-center">
          <h1>Can you click all the dolphins?</h1>
          <h2>Don't click the same dolphin twice!</h2>
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
