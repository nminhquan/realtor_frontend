import React from "react";
import Header from "./header/header";
import { ItemGrid } from "./grid/item_grid";
import NavBar from "./navigation/nav-bar";
import SimpleMap from "./map/google-map";
import Footer from "./footer/footer";

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <SimpleMap />
        <ItemGrid />
        <Footer siteTitle="© 2018 Supper Squirrel" />
      </div>
    );
  }
}
