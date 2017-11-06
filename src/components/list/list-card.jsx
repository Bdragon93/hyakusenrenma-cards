import React, { Component } from 'react';
import Card from 'components/shared/card';
require('assets/styles/components/_list.scss');

class ListCard extends Component {
  render(){
    return (
      <ul className="list-card clearfix">
        <li><Card/></li>
        <li><Card/></li>
        <li><Card/></li>
        <li><Card/></li>
      </ul>
    )
  }
}

export default ListCard;
