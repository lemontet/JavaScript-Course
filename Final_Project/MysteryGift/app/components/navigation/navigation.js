import React from 'react';
import './style.scss';
// var FontAwesome = require('react-fontawesome');


import menuIcon from '../../assets/menu.png';

class Navigation extends React.Component {
  render() {
    return(
      <nav className="navigation">
        <img src={menuIcon} className='menu-icon'/>
      </nav>
    )
  }
}

export default Navigation;
