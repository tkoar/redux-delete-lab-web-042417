import React, { Component } from 'react';

class Band extends Component {

  deleteBand(event) {
    this.props.store.dispatch({type: "DELETE_BAND", id: this.props.band.id })
  }

  render() {
    return(
      <div>
        <li>{this.props.band.text}</li>
        <button onClick={this.deleteBand.bind(this)}>Delete {this.props.band.text}</button>
      </div>
    );
  }
};

export default Band;
