import React, { Component } from 'react';

class AddGameForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <main className="pa4 black-80">
        <form className="measure center">
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="title">Title</label>
              <input className="pa2 input-reset ba bg-transparent w-100" type="text" ref={(t) => this.title = t} name="title" id="title"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="description">Description</label>
              <input className="pa2 input-reset ba bg-transparent w-100" type="text" ref={(d) => this.description = d} name="description" id="description"/>
            </div>
          </form>
          <div className="measure center">
            <button className="b w-100 ph3 pv2 input-reset ba b--black bg-black white grow pointer f6 dib" onClick={() => this.props.onSubmit(this.title.value, this.description.value)}>submit</button>
          </div>
      </main>
    );
  }
}

export default AddGameForm;
