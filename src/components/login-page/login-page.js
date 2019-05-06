import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "../input";
import { login } from "../../actions/auth";
/*import { required, nonEmpty } from "../../validators";*/
import "./login-page.css";
import {
  required,
  nonEmpty,
  length,
  isTrimmed
} from "../../validators";

const passwordLength = length({ min: 10, max: 72 });
export class LoginForm extends React.Component {
  onSubmit(values) {
    console.log("Login", values); // make sure all values for each form are console.logged here
    //this.props.dispatch(login(values.username, values.password)); // TODO sends data to server (Ajax)
    return this.props.history.push("/dashboard"); //redirect to dashboard
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <div id="login-page">
        <header>
          <h1>Login</h1>
        </header>

        <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          acceptCharset="UTF-8"
          className="login-form"
        >
          <legend />

          <label htmlFor="username">Username</label>

          <Field
            component={Input}
            type="text"
            placeholder="Type here"
            name="username"
            validate={[required, nonEmpty, isTrimmed]}
            id="login-username"
          />

          <label htmlFor="password">Password</label>

          <Field
            component={Input}
            type="password"
            name="loginPassword"
            id="login-password"
            validate={[required, passwordLength, isTrimmed]}
          />

          <button id="enter"type="submit">Enter</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(LoginForm);
