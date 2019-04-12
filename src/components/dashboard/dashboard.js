import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import './dashboard.css';

export function Dashboard(props) {
    
    

return (
      <div>
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
    </div>
  );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Dashboard); 