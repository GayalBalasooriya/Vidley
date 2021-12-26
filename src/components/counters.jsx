import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    key: 0,
    count: 4,
  };

  render() {
    return (
      <div>
        {this.props.children}
        <Counter key={this.state.key} value={this.state.count}>
          <h4>Hi</h4>
          <h1>Name</h1>
        </Counter>
      </div>
    );
  }
}

export default Counters;
