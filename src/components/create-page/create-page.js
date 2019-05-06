import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import CreateForm from "./create-form";

export class CreatePage extends React.Component {
  render() {
    return <CreateForm />;
  }
}

const mapStateToProps = state => {
  return {};
};

export default requiresLogin()(connect(mapStateToProps)(CreatePage));
