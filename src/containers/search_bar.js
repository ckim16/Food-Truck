import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterTrucks } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {food: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ food: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.filterTrucks(this.state.food);
    this.setState({ food: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="What do you feel like eating now?"
          className="form-control"
          value={this.state.food}
          onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
      </form>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({filterTrucks}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);