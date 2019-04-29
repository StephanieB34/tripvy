import React from "react";
import { connect } from "react-redux";
// import requiresLogin from "./requires-login";
// import { fetchProtectedData } from "../../actions/protected-data";
import { API_BASE_URL } from "../../config";
import "./dashboard.css";
export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
  }

  componentDidMount() {
    fetch(`${API_BASE_URL}/trips`, {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => res.json())
      .then(trips => this.setState({ trips }))
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="dashboard">
        <header>
          <h1>Tripvy</h1>
        </header>
        <div className="dashboard-page">
          <button type="submit"> Create List</button>

          {this.state.trips.map((trip, key) => (
            <div id="details" key={key}>
              <div value="location">Location: {trip.location} </div>
              {trip.itemsNeeded.map((item, key) => (
                <div value="items" key={key}>
                  {item}
                </div>
              ))}
              <button id="delete"> Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

//
// <div value="items">jacket</div>
// <div value="items">t-shirt</div>

const mapStateToProps = state => {
  return {};
  // const { currentUser } = state.auth;
  // return {
  //   username: state.auth.currentUser.username,
  //   name: `${currentUser.firstName} ${currentUser.lastName}`,
  //   protectedData: state.protectedData.data
  // };
};

// export default requiresLogin()(connect(mapStateToProps)(Dashboard));
export default connect(mapStateToProps)(Dashboard);
