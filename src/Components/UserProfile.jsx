import React from 'react';

export default function UserProfile() {
  return (
    <div className="user-view content">
      <nav className="user-view__menu">
        <ul className="side-nav">
          <li className="side-nav--active">
            <a href="#">
              <svg>
                <use href="img/icons.svg#icon-settings" />
              </svg>
                Settings
              </a>
          </li>
          <li>
            <a href="/mybookings">
              <svg>
                <use href="img/icons.svg#icon-briefcase" />
              </svg>
                My bookings
              </a>
          </li>
          <li>
            <a href="/myreviews">
              <svg>
                <use href="img/icons.svg#icon-star" />
              </svg>
                My reviews
              </a>
          </li>
          <li>
            <a href="/billing">
              <svg>
                <use href="img/icons.svg#icon-credit-card" />
              </svg>
                Billing
              </a>
          </li>
        </ul>
        <div className="admin-nav">
          <h5 className="admin-nav__heading">Admin</h5>
          <ul className="side-nav">
            <li>
              <a href="#">
                <svg>
                  <use href="img/icons.svg#icon-map" />
                </svg>
                  Manage tours
                </a>
            </li>
            <li>
              <a href="#">
                <svg>
                  <use href="img/icons.svg#icon-users" />
                </svg>
                  Manage users
                </a>
            </li>
            <li>
              <a href="#">
                <svg>
                  <use href="img/icons.svg#icon-star" />
                </svg>
                  Manage reviews
                </a>
            </li>
            <li>
              <a href="#">
                <svg>
                  <use href="img/icons.svg#icon-briefcase" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="user-view__content">
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
          <form className="form form-user-data">
            <div className="form__group">
              <label className="form__label" htmlFor="name">Name</label>
              <input
                className="form__input"
                id="name"
                required="required"
                type="text"
                value="Plan My Trip"
              />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label" htmlFor="email">Email address</label>
              <input
                className="form__input"
                id="email"
                required="required"
                type="email"
                value="admin@planmytrip.com"
              />
            </div>
            <div className="form__group right">
              <button className="btn btn--small btn--blue">Save details</button>
            </div>
          </form>
        </div>
        <div className="line">&nbsp;</div>
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Password change</h2>
          <form className="form form-user-settings">
            <div className="form__group">
              <label className="form__label" htmlFor="password-current">Current password</label>
              <input
                className="form__input"
                id="password-current"
                minlength="8"
                placeholder="••••••••"
                required="required"
                type="password"
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="password">New password</label>
              <input
                className="form__input"
                id="password"
                minlength="8"
                placeholder="••••••••"
                required="required"
                type="password"
              />
            </div>
            <div className="form__group ma-bt-lg">
              <label className="form__label" htmlFor="password-confirm">Confirm password</label>
              <input
                className="form__input"
                id="password-confirm"
                minlength="8"
                placeholder="••••••••"
                required="required"
                type="password"
              />
            </div>
            <div className="form__group right">
              <button className="btn btn--small btn--blue">Save password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}