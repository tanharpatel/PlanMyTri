import React from 'react';

export default function SignUp() {
  return (
    <div className="login-form content">
      <h2 className="heading-secondary ma-bt-lg">Create your account</h2>
      <form className="form">
        <div className="form__group">
          <label className="form__label" htmlFor="email">Your name</label>
          <input
            className="form__input"
            id="name"
            placeholder="Plan My Trip"
            required="required"
            type="text"
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="email">Email address</label>
          <input
            className="form__input"
            id="email"
            placeholder="you@provider.com"
            required="required"
            type="email"
          />
        </div>
        <div className="form__group ma-bt-md">
          <label className="form__label" htmlFor="password">Password</label>
          <input
            className="form__input"
            id="password"
            minlength="8"
            placeholder="••••••••"
            required="required"
            type="password"
          />
        </div>
        <div className="form__group ma-bt-md">
          <label className="form__label" htmlFor="password">Confirm Password</label>
          <input
            className="form__input"
            id="confirmpassword"
            minlength="8"
            placeholder="••••••••"
            required="required"
            type="password"
          />
        </div>
        <div className="form__group">
          <button className="btn btn--blue">Sign Up</button>
        </div>
      </form>
    </div>
  );
}