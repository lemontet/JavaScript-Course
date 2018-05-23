import React from 'react';
import './style.scss';

import MainButton from '../main-button/main-button.js';
import Banner from '../banner/banner.js';


// const styles = {
//     background: {
//         backgroundImage: `url(${QuestionBlock})`
//     }
// };

class Welcome extends React.Component {

  render(){

    return(
      <div className="welcome">
        <MainButton />
        <Banner />
      </div>
    )
  }
}

export default Welcome;