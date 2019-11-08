import React from 'react';

import Directory from '../../components/directory/directory.component';
import Header from '../../components/header/header.component'
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Header/>
    <Directory />
  </div>
);

export default HomePage;