import React, { Component } from 'react';
import Header from './headernav/header';
import Navbar from './headernav/navbar';
import ShopCart from './shop/shopCart';

export default class Layout extends Component {      
  render() {
    return (
      <div className='layout'> 
        {this.props.children}
        <Header/>
        <Navbar/>
        <ShopCart />
      </div>
    );
  }
}
