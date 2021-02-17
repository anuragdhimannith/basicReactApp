import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import VenueNfo from './components/venueNFo/index';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
import './resources/styles.css'


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venuenfo">
          <VenueNfo />
        </Element>
        <Element name="highlights">
          <Highlight />
        </Element >
        <Element name="pricing">
          <Pricing />
        </Element >
        <Element name="location">
          <Location />
        </Element>
        <Footer/>
      </div>
    );
  }
}

export default App;