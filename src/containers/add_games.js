import React, { Component } from 'react';
import AddGameForm from '../components/add_game_form';
import { addGame } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddGame extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(title, description) {
    console.log("added game");
    this.props.addGame(
      {
        title: title,
        description: description
      }
    );
  }

  render() {
    return(
      <AddGameForm onSubmit={this.onSubmit} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addGame: addGame }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddGame);
