import React, { Component } from 'react';

export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img alt={this.id} src="/cat.gif" />
      </div>
    );
  }
}
