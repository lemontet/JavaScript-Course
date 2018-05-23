import React from 'react';
import styles from './styles.scss'

import GiftForm from '../gift-form/gift-form.js'

class MainSection extends React.Component{
  render(){
    return(
      <section className="main-section">
        <GiftForm />
      </section>
    )
  };
}

export default MainSection;
