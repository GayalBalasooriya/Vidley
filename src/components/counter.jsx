import React from "react";

class Counter extends React.Component {
  render() {
    console.log(this.props);

    return <div>{this.props.children} Hellooo</div>;
  }
}

export default Counter;
