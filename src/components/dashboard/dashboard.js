import React from "react";
import { connect } from "react-redux";
import { API_BASE_URL } from "../../config";
import "./dashboard.css";
import { Link } from "react-router-dom";
import requiresLogin from "../requires-login";
export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
  }

  componentDidMount() {
    this.fetchAllTrips();
  }
  fetchAllTrips() {
    fetch(`${API_BASE_URL}/trips`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`
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
  delete(id) {
    fetch(`${API_BASE_URL}/trips/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`
      }
    })
      .then(trips => this.fetchAllTrips())
      .catch(err => {
        console.log(err);
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
          <Link to="/create" className="button" id="create-button">
            Create List
          </Link>

          {this.state.trips.map((trip, index) => (
            <div id="details" key={index}>
              <div id="location" value="location">
                Location: {trip.location}{" "}
              </div>
              <button id="toggle" onClick={e => this.toggle(index)}>
                Details
              </button>
              {trip.open ? (
                <React.Fragment>
                  {trip.itemsNeeded.map((item, key) => (
                    <div value="items" key={key}>
                      {item}
                    </div>
                  ))}
                  <button id="delete" onClick={e => this.delete(trip.id)}>
                    Delete
                  </button>
                </React.Fragment>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
