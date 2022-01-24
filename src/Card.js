import React, { Component } from 'react';
import "./Card.css";


 class Card extends Component {
     
     render() {
         let deg = `${this.props.rotate}deg`
      let Styles ={transform:`rotate(${deg})`};
      const props = this.props;
    return <img style={Styles} className='Card' src={props.src} alt={props.alt} />;
  }
}

export default Card
