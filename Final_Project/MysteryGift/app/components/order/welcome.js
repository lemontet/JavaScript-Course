import React from 'react';
import './style.scss';

import QuestionBlock from '../../public/QuestionBlock.png';


// const styles = {
//     background: {
//         backgroundImage: `url(${QuestionBlock})`
//     }
// };

class Welcome extends React.Component {

  render(){

    return(
      <div className="background">
        <button name="enter site" className="home-button">
          <img src={QuestionBlock} className="mystery-block"/>
        </button>
        <div className="mystery-heading">Mystery Gift</div>
      </div>
    )
  }
}

export default Welcome;