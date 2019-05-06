import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./SideDrawer.css";

import { clearAuth } from "../../actions/auth";

export class SideDrawer extends React.Component {
  render() {
    let drawerClasses = ["side-drawer"];
    if (this.props.show) {
      drawerClasses = ["side-drawer open"];
    }
    return (
      <nav className={drawerClasses}>
        {!this.props.currentUser ? (
          <React.Fragment>
            <Link id="nav-links" className="links" to="/login">
              Login
            </Link>
            <Link id="nav-links" className="links" to="/Registration">
              Register
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link id="nav-links" className="links" to="/dashboard">
              Dashboard
            </Link>
            <Link id="nav-links" className="links" to="/create">
              Add a Trip
            </Link>
            <Link
              id="nav-links"
              className="links"
              to="/"
              onClick={() => this.props.dispatch(clearAuth())}
            >
              Log Out
            </Link>
          </React.Fragment>
        )}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { currentUser: state.auth.currentUser };
};

export default connect(mapStateToProps)(SideDrawer);
