import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {food: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          className="search-input"
          placeholder="What do you want to eat now?"
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