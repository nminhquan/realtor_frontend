import React from 'react';
import Header from './header/header';
import Carousel from './carousel/carousel';
import {ItemGrid} from './grid/item_grid'
import NavBar from './navigation/nav-bar';

export default class Home extends React.Component {
  render() {
    return(
      <div className="container">
        <Header />
        <NavBar />
        <Carousel />
        <ItemGrid />
      </div>
    );
  }
}
