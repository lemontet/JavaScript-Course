import React from 'react';
import './style.scss';

import Navigation from '../navigation/navigation.js';
import MainButton from '../main-button/main-button.js';
import Welcome from '../welcome/welcome.js';
import Banner from '../banner/banner.js';
import MainSection from '../main-section/main-section.js';
import SimpleForm from '../simple-form/simple-form.js';

import styles from './style.scss';

class Layout extends React.Component{
  render() {
    return(
      <div className="layout">
        <Navigation />
        <MainButton />
        <Banner />
        <MainSection />


      </div>
    )
  };
};

export default Layout;
