import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div id="signup-page" hidden>
        <header>Register</header>
        <form role="form" accept-charset="UTF-8" class="signup-form">
          <fieldset>
            <legend>Register</legend>
            <label for="first-name">First Name</label>
            <input
              type="text"
              placeholder="Type here"
              name="first-name"
              id="first-name"
              required
            />
  
            <label for="last-name">Last Name</label>
            <input
              type="text"
              placeholder="Type here"
              name="last-name"
              id="last-name"
              required
            />
  
            <label for="username">Username</label>
            <input
              type="text"
              placeholder="Type here"
              name="username"
              id="signup-username"
              required
            />
  
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="Type here"
              name="password"
              id="password"
              required
            />
  
            <label for="retype-password">Retype Password</label>
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
          </fieldset>
        </form>
      </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);