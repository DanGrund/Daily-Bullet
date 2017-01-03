import React from 'react';

export default class DailyBullet extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '',
      input: ''
    }
  }
  prependListItem() {
    this.setState({
      task: this.state.input
    })
  }

  saveValue(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div>
        <li>{this.state.task}</li>
        <input onChange={(e) => this.saveValue} placeholder="write down yo' task"></input>
        <button onClick={(e) => this.prependListItem}>Save Item</button>
      </div>
    );
  }
}
