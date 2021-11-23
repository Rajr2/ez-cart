import React, { Component } from "react";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      registrationErrors: "",
    },
    msg: ""
  };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

  handleChange = (e, key) => {
    const { obj } = this.state;
    obj[e.target.name] = e.target.value;
    this.setState({ obj });
  };

  handleSubmit =(e) => {
    e.preventDefault();

    axios
      .post("http://localhost/Login_form/Signup.php", this.state.obj)
      .then(response => {
        if (response.data.status === "created") {
          this.setState({
            msg: response.data.message,
            obj: {
              name: "",
              email: "",
              password: "",
              cpassword: "",
            },
          });
        }
      }
      )
      .catch(error => {
        console.log("registration error", error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

        <input
            type="name"
            name="name"
            placeholder="Name"
            value={this.state.obj.name}
            onChange={this.handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.obj.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.obj.password}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="cpassword"
            placeholder="Password confirmation"
            value={this.state.obj.cpassword}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Register</button>
          <Link to="/signin" className="signin_link">I'm already a member</Link>
        </form>
      </div>
    );
  }
}
