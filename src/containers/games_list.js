import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Game from '../components/game';
import { joinGame, killGame } from '../actions/index';

class GamesList extends Component {

  renderGames() {
    return(
      this.props.games.map((game) => {
        return(
          <Game
            key={game.title}
            onJoin={() => this.props.joinGame(game)}
            onDel={() => this.props.killGame(game)}
            title={game.title}
            description={game.description}
          />
        );
      })
    );
  }

  render () {
    return(
      <div className="list pl0 ml0 center mw6 br2">
        {this.renderGames()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    games: state.games,
    active_game: state.joinGame
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    joinGame: joinGame,
    killGame: killGame
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);
