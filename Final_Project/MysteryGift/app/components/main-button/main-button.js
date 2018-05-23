import React from 'react';
import './style.scss';
import QuestionBlock from '../../assets/QuestionBlock.png';


// const styles = {
//     background: {
//         backgroundImage: `url(${QuestionBlock})`
//     }
// };

class MainButton extends React.Component {
  // constructor(propers){
    // super(props){
    //   this.state = {something};
    // }
/*onClick=getForm*/

  render(){
    return(
        <input
          type="image"
          src={QuestionBlock}
          className="main-button"

        />
    )
  }
}

export default MainButton;
