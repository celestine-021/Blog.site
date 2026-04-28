import React, { Component } from "react";

class Hobbies extends Component {
  constructor() {
    super();

    this.state = {
      hobbies: [
        "Reading",
        "Coding",
        "Traveling",
        "Music",
        "Gaming",
        "Cooking",
        "Photography",
        "Dancing"
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>My Hobbies</h2>
        <ul>
          {this.state.hobbies.map((hobby, index) => {
            // Highlight last 4 hobbies
            const isLastFour = index >= this.state.hobbies.length - 4;

            return (
              <li
                key={index}
                style={{
                  backgroundColor: isLastFour ? "lightblue" : "transparent",
                  padding: "5px",
                  margin: "5px"
                }}
              >
                {hobby}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Hobbies;