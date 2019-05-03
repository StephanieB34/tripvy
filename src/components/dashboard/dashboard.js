import React from "react";
import { connect } from "react-redux";
// import requiresLogin from "./requires-login";
// import { fetchProtectedData } from "../../actions/protected-data";
import { API_BASE_URL } from "../../config";
import "./dashboard.css";
import { Link } from "react-router-dom";
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
      .then(trips =>
        trips.map(trip => {
          trip.open = false;
          return trip;
        })
      )
      .then(trips => this.setState({ trips }))
      .catch(err => {
        console.log(err);
      });
  }

  toggle(index) {
    console.log(index);
    let modifiedTrips = this.state.trips;
    modifiedTrips[index].open = !modifiedTrips[index].open;

    this.setState({
      trips: modifiedTrips
    });
  }

  render() {
    console.log(this.state.trips);
    return (
      <div className="dashboard">
        <header>
          <h1>Tripvy</h1>
        </header>
        <div className="dashboard-page">
          <Link to="/create" className="button">
            Create List
          </Link>
          {/* <button type="submit">Create List</button> */}

          {this.state.trips.map((trip, index) => (
            <div id="details" key={index}>
              <div value="location">Location: {trip.location} </div>
              <button onClick={e => this.toggle(index)}>toggle</button>
              {trip.open ? (
                <React.Fragment>
                  {trip.itemsNeeded.map((item, key) => (
                    <div value="items" key={key}>
                      {item}
                    </div>
                  ))}
                  <button id="delete">Delete</button>
                </React.Fragment>
              ) : null}
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
