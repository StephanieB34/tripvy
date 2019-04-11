import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import dashboard from './dashboard.css';

export function dashboard(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
      <header> 
        <h1>Tripvy</h1>
      </header>
      <div className="dashboard-page">
      <button id="create"> Create List</button>
      <form id="list">
        <select id="details">
          <option value="location">Location: Bora Bora   Details </option>
          <option value="items">sandals</option>
          <option value="items">jacket</option>
          <option value="items">t-shirt</option>
          <button id="delete"> Delete</button>
        </select>
      </form>
    </div>
    <div class="footer">
      <p>Stephanie Beres</p>
    </div>
  );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(dashboard); 