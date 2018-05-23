import React from 'react';

class GiftPreview extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      giftName: this.props.giftName,
      giftImage: this.props.giftImage,
    };

  }

  componentDidMount() {
    this.setState({
      // TODO:
    });
  }

  componentWillUnmount() {
    this.setState({
      // TODO:
    });
  }

  render(){
    return(
      <div>
        <h1>{this.props.giftName}</h1>
        <img src={giftImage}/>
      </div>
    )
  }
}

export default GiftPreview;

import things from '../assets/things.js';
