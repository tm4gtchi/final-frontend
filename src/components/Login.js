import React from "react";
import { NavLink } from "react-router-dom";
import { login } from "../api";

class Login extends React.Component {
  state = {
    username:"",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async (event) => {
    const { setCurrentUser, history } = this.props;
    event.preventDefault();
    const { username, password } = this.state;
    const response = await login(username, password);
    setCurrentUser(response.data);
    console.log("logged in");
    history.push(`/${username}`);
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="form-layout">
        <form onSubmit={this.handleFormSubmit} className="forms">
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button className="form-btn">Login</button>
        </form>
        <p>
          Don't have an account?
          <NavLink to="/signup"> Signup</NavLink>
        </p>
      </div>
    );
  }
}

export default Login;
