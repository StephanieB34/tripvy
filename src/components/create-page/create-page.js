import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, focus } from "redux-form";
import { Link, Redirect } from "react-router-dom";
import Input from "../input";
import { API_BASE_URL } from "../../config";
import "./create-page.css";

export class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: ["item1"]
    };
  }

  onSubmit(values) {
    const { location } = values;
    let items = [];
    this.state.fields.forEach(field => {
      let val = values[field];
      items.push(val);
    });

    fetch(`${API_BASE_URL}/trips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({
        location,
        itemsNeeded: items
      })
    })
      .then(res => res.json())
      .then(trips => this.props.history.push("/dashboard"))
      .catch(err => {
        console.log(err);
      });
  }

  addField(e) {
    e.preventDefault();
    let fields = this.state.fields.slice();
    fields.push(`item${fields.length + 1}`);
    this.setState({
      fields
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Tripvy</h1>
        </header>
        <div className="create-page">
          <form
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
            className="create-form"
          >
            <p>Where are you going?</p>
            <Field
              component={Input}
              type="text"
              name="location"
              id="location"
            />

            <p>What do you need?</p>

            {this.state.fields.map(item => (
              <Field component={Input} type="text" name={item} id={item} />
            ))}

            <button onClick={e => this.addField(e)}>Add Field</button>

            <button type="submit">Submit</button>
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
