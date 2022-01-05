import './App.css';
import Movies from './components/movies';
//import Counters from './components/counters';
//import NavBar from './components/navbar';
import React from 'react';

class App extends React.Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log('constructor-called');
  }

  componentDidMount() {
    console.log('app-mounted');
  }

  handleDelete = (counterId) => {
    //console.log("Event handler called", counterId);
    const counters = this.state.counters.filter((i) => i.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map((i) => {
      i.value = 0;
      return i;
    });
    this.setState({ counters });
  };

  render() {

    console.log('app-rendered')

    return (
      <React.Fragment>
        {/* <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
        </main> */}
        <main className='container'>
          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
