import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  // return <div className="footer">
  //   <ul className="footer__nav">
  //     <Link to="/about" ><li><a href="#">About Us</a></li></Link>
  //     <Link to="/contact" ><li><a href="#">Contact Us</a></li></Link>
  //   </ul>
  //   <p className="footer__copyright">
  //     &copy; All rights reserved.
  //   </p>
  // </div>
  return <div className="footer">
    <div>
      <img src="PlanMyTrip1.png" alt="Plan My Trip" height="100" />
    </div>
    <div>
      <p style={{ "font-size": "18px", "line-height": "2em", "float": "right" }}>
        <Link to="/about" className="nav__el">About Us</Link>
      </p>
      <p style={{ "font-size": "18px", "line-height": "2em", }}>
        <Link to="/contact" className="nav__el">Contact Us</Link>
      </p>
    </div>
  </div>
}

export default Footer