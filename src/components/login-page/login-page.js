import React from "react";
import { /*Field,*/ reduxForm, focus } from "redux-form";

import { login } from "../../actions/auth";
/*import { required, nonEmpty } from "../../validators";*/
import "./login-page.css";

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
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

        <form onSubmit
          action="login"
          acceptCharset="UTF-8"
          method="post"
          className="login-form"
        >
          <legend></legend>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Type here"
            name="username"
            onChange = {this.handleInputChange}
            id="login-username" 
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Type here"
            name="loginPassword"
            id="login-password"
            required
          />

          <button type="submit">Enter</button>
        </form>
      </div>
      
    );
  }
}

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(LoginForm);
