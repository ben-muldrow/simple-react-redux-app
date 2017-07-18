import React, { Component } from 'react';
import { connect } from 'react-redux';

class GamesJoined extends Component {
  render() {
    if (!this.props.joinGame) {
      return(<h3 className="tc">No game selected</h3>);
    } else {
      return(
        <div>
          <h3 className="tc">Active Game:</h3>
          <h3 className="tc">{this.props.joinGame.title}</h3>
        </div>);
      }
  }
}

function mapStateToProps(state) {
  return {
    joinGame: state.joinGame
  };
}

export default connect(mapStateToProps)(GamesJoined);
