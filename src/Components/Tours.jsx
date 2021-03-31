import React from 'react';
import { Link } from 'react-router-dom';

const Tours = (props) => {
  return (
    <React.Fragment>
      <div className="card-container content" >
        {props.trips.map((trip) => (
          <div className="card">
            <div className="card__header">
              <div className="card__picture">
                {/* <div className="card__picture-overlay">&nbsp;</div> */}
                <img
                  src="bg.jpg"
                  alt="Tour 1"
                  class="card__picture-img"
                />
              </div>
              <h3 className="heading-tertirary">
                <span>{trip.startLocation.address}</span>
              </h3>
            </div>
            <div className="card__details">
              <h4 className="card__sub-heading">{trip.duration}-day tour</h4>
              <p className="card__text">{trip.summary}</p>
              <div className="card__data">
                {/* <svg className="card__icon">
                    <use xlink:href="img/icons.svg#icon-map-pin"></use>
                    </svg> */}
                <span>{trip.startLocation.description}</span>
              </div>
              <div className="card__data">
                {/* <svg className="card__icon">
                    <use xlink:href="img/icons.svg#icon-calendar"></use>
                    </svg> */}
                <span>April 2021</span>
              </div>
              <div className="card__data">
                {/* <svg className="card__icon">
                    <use xlink:href="img/icons.svg#icon-flag"></use>
                    </svg> */}
                <span>x stops</span>
              </div>
              <div className="card__data">
                {/* <svg className="card__icon">
                    <use xlink:href="img/icons.svg#icon-user"></use>
                    </svg> */}
                <span>{trip.maxGroupSize} people</span>
              </div>
            </div>

            <div className="card__footer">
              <p>
                <span className="card__footer-value">{trip.price} </span>
                <span className="card__footer-text">per person</span>
              </p>
              <p className="card__ratings">
                <span className="card__footer-value">{trip.ratingsAverage} </span>
                <span className="card__footer-text">rating ({trip.ratingsQuantity})</span>
              </p>
              <Link to="/tripdetail" className="btn btn--blue btn--small">Details</Link>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Tours