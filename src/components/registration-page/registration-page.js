import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import  './registration-page.css';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div id="signup-page">
        <header><h1>Register</h1>
        </header>
        <form role="form" acceptCharset="UTF-8" className="signup-form">
            <label id="first-name">First Name</label>
            <input
              type="text"
              placeholder="Type here"
              name="first-name"
              id="first-name"
              required
            />
  
            <label id="last-name">Last Name</label>
            <input
              type="text"
              placeholder="Type here"
              name="last-name"
              id="last-name"
              required
            />
  
            <label id="username">Username</label>
            <input
              type="text"
              placeholder="Type here"
              name="username"
              id="signup-username"
              required
            />
  
            <label id="password">Password</label>
            <input
              type="password"
              placeholder="Type here"
              name="password"
              id="password"
              required
            />
  
            <label id="retype-password">Retype Password</label>
            <input
              type="password"
              placeholder="Type again here"
              name="retype-password"
              id="retype-signup-password"
              required
            />
            <div id= "signup-error">
            
            </div>
            <button type="submit">Sign-up</button>
        </form>
      </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);