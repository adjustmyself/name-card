import React from 'react';
import './navi.styles.scss';

const Navi = () => (
<nav className="menu">
  <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
  <label className="menu-open-button" htmlFor="menu-open">
    <span className="hamburger hamburger-1"></span>
    <span className="hamburger hamburger-2"></span>
    <span className="hamburger hamburger-3"></span>
  </label>
  
  <a href="#test" className="menu-item"> <i className="fa fa-bar-chart">1</i> </a>
  <a href="#test" className="menu-item"> <i className="fa fa-plus">2</i> </a>
  <a href="#test" className="menu-item"> <i className="fa fa-heart">3</i> </a>
  <a href="#test" className="menu-item"> <i className="fa fa-envelope">4</i> </a>
  
  
</nav>
);

export default Navi;