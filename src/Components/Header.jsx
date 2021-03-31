import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return <div className="sticky">
    <header className="header">
      <nav className="nav nav--tours">
        <Link to="/" className="nav__el">All Tours</Link>
      </nav>
      {/* <div className="header__logo"> */}
      {/* <h1 style={{ color: 'white' }}>PlanMyTrip</h1> */}
      {/* <img src="1_t.png" alt="Plan My Trip" height="75" /> */}
      <img src="PlanMyTrip.png" alt="Plan My Trip" height="80" />
      {/* </div> */}
      <nav className="nav nav--user">
        <Link to="/userprofile" className="nav__el">User Profile</Link>
        {/* <Link to="/mybookings" className="nav__el">Bookings</Link> */}
        <Link to="/login" className="nav__el nav__el--cta">Logout</Link>
        <Link to="/login" className="nav__el nav__el--cta">Log in</Link>
        <Link to="/signup" className="nav__el nav__el--cta">Sign Up</Link>
      </nav>
    </header>
  </div>
}

export default Header