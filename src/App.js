import React, { Component } from 'react';
import Counters from './components/Counters';
import NavBar from './components/NavBar';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
      ]
    }
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
  }

  handleDelete = (counter) => {
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({counters});
  }

  handleAddCounter = () => {
    let nextId = this.state.counters.length + 1;
    const newObj = {
      id: nextId, value: 0
    }
    this.setState(prevState => ({
      counters: prevState.counters.concat(newObj)
    }))
  }
 
  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    })
    this.setState({counters})
  }

  render() {
    const {counters} = this.state;
    return (
      <div className='container'>
        <div className='navBar'>
          <NavBar
            onReset={this.handleReset}
            onAddCounter={this.handleAddCounter}
          />
        </div>
        <div className='counters'>
          <Counters
            counters={counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
