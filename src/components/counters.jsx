import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 4 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 },
  //   ],
  // };

  // handleDelete = (counterId) => {
  //   //console.log("Event handler called", counterId);
  //   const counters = this.state.counters.filter((i) => i.id !== counterId);
  //   this.setState({ counters });
  // };

  // handleIncrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters });
  // };

  // handleReset = () => {
  //   const counters = this.state.counters.map((i) => {
  //     i.value = 0;
  //     return i;
  //   });
  //   this.setState({ counters });
  // };

  render() {
    const { onReset, onDelete, onIncrement, onDecrement, counters } =
      this.props;

    return (
      <div>
        <button className="btn-btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            //value={counter.value}
            onDelete={onDelete}
            onIncrement={onIncrement}
            //id={counter.id}
            //selected={true}
            onDecrement={onDecrement}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
            <h1>Name</h1>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
