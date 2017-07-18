import React, { Component } from 'react';
import GamesList from '../containers/games_list';
import './App.css';
import GamesJoined from '../containers/games_joined';
import AddGame from '../containers/add_games';

class App extends Component {
  render() {
    return (
      <div>
        <GamesJoined />
        <AddGame />
        <GamesList />
      </div>
    );
  }
}

export default App;
