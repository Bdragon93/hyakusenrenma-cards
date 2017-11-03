import React, { Component } from 'react';
import { connect } from 'react-redux';
require('assets/styles/components/_card.scss');

class Card extends Component {
  render(){
    return (
      <div className="card">
        <div className="card-image">
          <div className="card-marker">
            <span>27</span>
            <span>fulh</span>
          </div>
          <span className="card-type">
            photos
          </span>
        </div>
        <div className="card-content">
          <h2 className="card-title">
            City Lights in New York
          </h2>
          <h3 className="card-subtitle">
            The city that never sleeps.
          </h3>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin enim nisi, et lacinia sapien convallis sit amet. Nulla vitae pellentesque quam, ornare suscipit ligula.
          </p>
          <div className="card-content-footer">
            <span><i className="fa fa-clock-o"></i><time>6 min ago</time></span>
            <span><i className="fa fa-comments"></i>66 comments</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
