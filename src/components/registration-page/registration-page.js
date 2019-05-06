
import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { registerUser } from "../../actions/users";
import { login } from "../../actions/auth";
import Input from "../input";
import  './registration-page.css';
import {
  required,
  nonEmpty,
  matches,
  length,
  isTrimmed
} from "../../validators";
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches("password");


  export class RegistrationForm extends React.Component {

   onSubmit(values) {
    const { username, password, firstName, lastName } = values;
    const user = { username, password, firstName, lastName };
    return this.props.history.push("/dashboard") 
    }

    render() {
    return (
        <div id="signup-page">
        <header><h1>Register</h1>
        </header>

        <form  onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
            acceptCharset="UTF-8" 
            className="signup-form">
            
            <legend />

            <label id="first-name">First Name</label>

            <Field
              component={Input}
              type="text"
              placeholder="Type here"
              name="first-name"
              id="first-name"
              validate={[required, nonEmpty, isTrimmed]}
            />
  
            <label id="last-name">Last Name</label>
            <Field
              component={Input}
              type="text"
              placeholder="Type here"
              name="last-name"
              id="last-name"
              validate={[required, nonEmpty, isTrimmed]}
            />
  
            <label id="username">Username</label>
            <Field
              component={Input}
              type="text"
              placeholder="Type here"
              name="username"
              id="signup-username"
              validate={[required, nonEmpty, isTrimmed]}
            />
  
            <label id="password">Password</label>
            <Field
              component={Input}
              type="password"
              placeholder="Type here"
              name="password"
              id="password"
              validate={[required, passwordLength, isTrimmed]}
             
            />
  
            <label id="retype-password">Retype Password</label>
            <Field
              component={Input}
              type="password"
              placeholder="Type again here"
              name="retype-password"
              id="retype-signup-password"
              validate={[required, passwordLength, isTrimmed, matchesPassword]}
             
            />
            <div id= "signup-error">
            
            </div>
            <button id="sign-up"type="submit">Sign-up</button>
        </form>
      </div>
    );
    }
}

export default reduxForm({
  form: "registration",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("registration", Object.keys(errors)[0]))
})(RegistrationForm);
