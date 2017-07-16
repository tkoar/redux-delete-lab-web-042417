import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  render() {
    return(
      <ul>
        {this.props.store.getState().bands.map((band, i) => <Band key={i} band={band} store={this.props.store}/>)}
      </ul>
    );
  }
};

export default Bands;
