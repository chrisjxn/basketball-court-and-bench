import React, { Component } from 'react';
import List from './components/List';

class App extends Component {
  constructor() {
    super()

    this.state = {
      players: {
        benched: ['jordan', 'james', 'bird'],
        onCourt: ['curry', 'johnson', 'erving']
      }
    }
    this.moveToBench = this.moveToBench.bind(this);
    this.moveToCourt = this.moveToCourt.bind(this);
  }

  moveToBench(player, i) {
    let court = this.state.players.onCourt;
    let bench = this.state.players.benched;

    bench.push(court.splice(i, 1));

    this.setState({
      players: {
        benched: bench,
        onCourt: court
      }
    })
  }

  moveToCourt(player, i) {
    let court = this.state.players.onCourt;
    let bench = this.state.players.benched;

    court.push(bench.splice(i, 1));

    this.setState({
      players: {
        benched: bench,
        onCourt: court
      }
    })
  }


  render() {
    return (
      <div>
        <List
          title="On Court"
          list={this.state.players.onCourt}
          handleClick={this.moveToBench} />

        <List
          title="On Bench"
          list={this.state.players.benched}
          handleClick={this.moveToCourt} />
      </div>
    )
  }
}

export default App;
