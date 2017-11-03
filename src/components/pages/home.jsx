import React, { Component } from 'react';
import ListCard from 'components/list/list-card';
require('assets/styles/pages/_home.scss');

class HomePage extends Component {
  render(){
    return (
      <div className="home">
        <h1 className="title">Listings</h1>
        <ListCard/> 
      </div>
    )
  }
}

export default HomePage;
