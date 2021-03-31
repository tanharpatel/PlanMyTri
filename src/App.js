import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Tours from './Components/Tours';
import Footer from './Components/Footer';
import UserProfile from './Components/UserProfile';
import Bookings from './Components/Bookings';
import TripDetail from './Components/TripDetail';
import * as API from './Components/API';
import { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Error from './Components/Error';

class App extends Component {

  state = { trips: [] }

  componentDidMount() {
    API.getAll()
      .then(data => {
        this.setState({ trips: data })
      });
  }

  render() {
    const tripList = this.state.trips;
    return (
      <Fragment>
        <Header></Header>
        <div className="main">
          <img class="bg" src="bg.jpg" />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Tours trips={tripList} />
              )}
            />
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login />
              )}
            />
            <Route
              exact
              path="/signup"
              render={(props) => (
                <SignUp />
              )}
            />
            <Route
              exact
              path="/tripdetail"
              render={(props) => (
                <TripDetail />
              )}
            />
            <Route
              exact
              path="/userprofile"
              render={(props) => (
                <UserProfile />
              )}
            />
            <Route
              exact
              path="/mybookings"
              render={(props) => (
                <Bookings />
              )}
            />
            <Route
              exact
              path="/myreviews"
              render={(props) => (
                <Error />
              )}
            />
            <Route
              exact
              path="/billing"
              render={(props) => (
                <Error />
              )}
            />
            <Route
              exact
              path="/about"
              render={(props) => (
                <About />
              )}
            />
            <Route
              exact
              path="/contact"
              render={(props) => (
                <Contact />
              )}
            />
          </Switch>
        </div>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default App;