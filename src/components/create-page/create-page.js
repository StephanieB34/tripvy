import React from "react";
import { connect } from "react-redux";
import { /*Link,*/ Redirect } from "react-router-dom";

import "./create-page.css";

export function createPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  // if (props.loggedIn) {
  //     return <Redirect to="/createPage" />;
  // }

  return (
    <div>
      <header>
        <h1>Tripvy</h1>
      </header>
      <div className="create-page">
        <form className="create-form">
          <p>Where are you going?</p>
          <input type="text" name="location" id="location" />

          <p>What do you need?</p>
          <input type="text" name="item" id="item" />
          <input type="text" name="item" id="item" />
          <input type="text" name="item" id="item" />
          <button type="submit">Add Field</button>
        </form>
        <button type="submit">Back</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(createPage);
