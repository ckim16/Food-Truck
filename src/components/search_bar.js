import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {food: ''};
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.food}
          onChange={event => this.onInputChange(event.target.value)}
          />
      </div>
    );
  }

  onInputChange(food) {
    this.setState({food});
    this.props.onSearchTermChange(food);
  }
}