import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
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

  removeFriend = id => {
    // Filter this.state.dolphins for dolphins with an id not equal to the id being removed
    const dolphins = this.state.dolphins.filter(dolphin => dolphin.id !== id);
    // Set this.state.dolphins equal to the new dolphins array
    this.setState({ dolphins });
  };

  // Map over this.state.dolphins and render a FriendCard component for each friend object
  render() {
    return (
  
      <Wrapper>
      <div>
      <div class="row">
      <div class="col-12">
      <nav class="navbar fixed-top navbar-dark bg-primary py-3">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/"><h1>Clicky Dolphin</h1></a>
          </li>
          <li class="nav-item">
            {this.state.message}
          </li>
        </ul>
      </nav>
      </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 jumbotron text-center mt-5">
          <h1>Click a dolphin to start</h1>
          <h2>But don't click the same dolphin twice!</h2>
        </div>
      </div>
        <div class="container">
          <div class ="row justify-content-center">
            {this.state.dolphins.map(dolphin => (
            <FriendCard
              removeFriend={this.removeFriend}
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
