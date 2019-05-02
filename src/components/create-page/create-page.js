import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, focus } from "redux-form";
import { Link, Redirect } from "react-router-dom";
import Input from "../input";
import {
    nonEmpty,
    isTrimmed
  } from "../../validators";
import "./create-page.css";


export class CreateForm extends React.Component {
    onSubmit(values) {
        const {  } = values;
        return this.props.history.push("/dashboard") 
        }

    render() { 
    return (
        <div>
        <header>
            <h1>Tripvy</h1>
        </header>
      <div className="create-page">
        <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        className="create-form">
          <p>Where are you going?</p>
          <Field component={Input} type="text" name="location" id="location"/>
          

          <p>What do you need?</p>
          <Field component={Input} type="text" name="item" id="item" />

          <Field component={Input} type="text" name="item" id="item" />

          <Field component={Input} type="text" name="item" id="item" />
          <button type="submit">Add Field</button>
        </form>
        
      </div>
    </div>
    );
    }
}

export default reduxForm({
    form: "CreateForm",
    onSubmitFail: (errors, dispatch) =>
      dispatch(focus("create", Object.keys(errors)[0]))
  })(CreateForm);
  
