import React, { Component } from 'react';
import Header from './headernav/header';
import Navbar from './headernav/navigation';

export default class Layout extends Component {      
  render() {
    return (
      <div className='layout'> 
        <Header/>
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
}
