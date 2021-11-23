import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let data = {};
    data[name] = value;
    this.setState(data);
  };

  handleSubmit = () => {
    axios
      .post("http://localhost/Login_form/Signin.php",{
        email: this.state.email,
        password: this.state.password,
      })   
      .then(response => {
        if (response.data.logged_in) {
          sessionStorage.setItem("obj",JSON.stringify(response.data.data));
          this.setState({
            msg: response.data.message,
            redirect: true,
          });
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="signin">
        <form onSubmit={this.handleSubmit}>

        <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
