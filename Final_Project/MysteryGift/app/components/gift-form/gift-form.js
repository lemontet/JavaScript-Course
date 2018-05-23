import React from 'react';
import style from './style.scss';

import getMysterGift from '../../JS/Fetch'
import things from '../../assets/things.js';

let gift = 'lemon';
let minPrice = 10;
let maxPrice = 30;
let currency = ['AUD', 'USD']

let randomItem = things.RandL.items[Math.floor(Math.random() * 100)];
// console.log(mysteryGift);

class GiftForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: '',
      recipient: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      budget: event.target.value,
      recipient: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    getMysterGift(randomItem, minPrice, this.state.budget, currency[0]);
    console.log(`Fetching your gift... sorry, it's a ${randomItem}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='gift-form'>
        <br/>
          <input
            type="text"
            placeholder="Budget?"
            value={this.state.value}
            onChange={this.handleChange} />
        <br/>
          <input
            type="text"
            placeholder="Recipient?"
            value={this.state.value}
            onChange={this.handleChange}
          />
        <br/>
        <input
          type="submit"
          value="Summon Gift" />
      </form>
    );
  }
}

export default GiftForm;
