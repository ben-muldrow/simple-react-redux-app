import React, { Component } from 'react';

export default class Game extends Component {
  render() {
    return(
        <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
          <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{this.props.title}</h1>
          <div className="pa3 bt b--black-10">
            <p className="f6 f5-ns lh-copy measure">
              {this.props.description}
            </p>
            <button
              className="dim br2 bg-white bn ph3 mv2 mh2"
              onClick={this.props.onJoin}>
              Join
            </button>
            <button
              className="dim br2 bg-white bn ph3 mv2 mh2"
              onClick={this.props.onDel}>
              Delete
            </button>
          </div>
        </article>
    );
  }

  // <h3>{this.props.title}</h3>
  // <p>{this.props.description}</p>
  // <button
  //   className="dim br2 bg-white bn ph3 mv2 mh2"
  //   onClick={this.props.onJoin}>
  //   Join
  // </button>
  // <button
  //   className="dim br2 bg-white bn ph3 mv2 mh2"
  //   onClick={this.props.onDel}>
  //   Delete
  // </button>

}
