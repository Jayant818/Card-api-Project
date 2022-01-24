import React, { Component } from 'react';
import axios from 'axios';
import Card from "./Card"
import "./Deck.css";


function rand(){
    return Math.floor(Math.random() *360+1);
}

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state={id : "",cards:[],success:"true",rotate:[]};
        this.handleClick = this.handleClick.bind(this);
    }
   
    async handleClick(){
        let card = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.id}/draw/`)
        this.setState({cards:[...this.state.cards, card.data.cards[0]],rotate:[...this.state.rotate,rand()],success : card.data.success})
    
    }
    async componentDidMount() {
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle ')
        let data = res.data;
        this.setState({id:data.deck_id});
    }
  render() {
      if(!this.state.success){
          alert('Deck Get Empty !!!!!!!!!')
      }
      return( <div className="Deck">
        <h1 className='Deck-title'>🔶Deck Of Cards🔶</h1>
        <h2 className='Deck-title subtitle'>
          ♦ A little demo made with React ♦
        </h2>
        <button onClick={this.handleClick} className='Deck-btn'>Get Card!!</button>
        <div className='Deck-cardarea'>
        {this.state.cards.map((m,idx)=> <Card src={m.image} key={idx} alt={m.code} rotate={this.state.rotate[idx]}/>)}
            </div>
     

    </div>);
  }
}

export default Deck
