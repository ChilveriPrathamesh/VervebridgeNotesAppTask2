import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { PiEyesFill } from "react-icons/pi";
import axios from "axios";
import Header from "../Home/Header";
import "./index.css";
import mainUrl from "../mainUrl";

class Signin extends Component {
  state = {
    showPassword: false,
    confirmPasswordVisible: false,
    username: "",
    email: "", // Added email field
    password: "",
    confirmPassword: "",
    error: "",
    successMessage: "",
  };

  togglePasswordShow = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  toggleConfirmPasswordShow = () => {
    this.setState({
      confirmPasswordVisible: !this.state.confirmPasswordVisible,
    });
  };

  handlesignin = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = this.state;

    // Check if passwords match
    if (password !== confirmPassword) {
      this.setState({ error: "Passwords do not match", successMessage: "" });
      return;
    }

    try {
      // API request options
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      };

      const url = `${mainUrl}/api/user/register`;

      // Fetch API request
      const response = await fetch(url, options);

      // Handle non-2xx responses (errors)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Sign in failed");
      }

      // Parse the response body as JSON
      const data = await response.json();

      // Set success message
      this.setState({ error: "", successMessage: data.message });

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        this.props.history.push("/"); // Ensure you're using React Router for navigation
      }, 2000);
    } catch (err) {
      // Error handling
      this.setState({
        error: err.message || "Sign in failed",
        successMessage: "",
      });
    }
  };

  render() {
    const {
      showPassword,
      confirmPasswordVisible,
      username,
      email,
      password,
      confirmPassword,
      error,
      successMessage,
    } = this.state;

    return (
      <>
        <Header />
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container my-5 py-5">
            <div className="row align-items-center justify-content-center ">
              <form className="login-container" onSubmit={this.handlesignin}>
                <h1 className="login-head">Sign In</h1>
                {error && <p className="error-message">{error}</p>}
                {successMessage && (
                  <p className="success-message">{successMessage}</p>
                )}
                <label className="username">Username</label>
                <input
                  type="text"
                  className="input-element"
                  value={username}
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
                <label className="username">Email</label>
                <input
                  type="email"
                  className="input-element"
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <label className="username">Password</label>
                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="password-input-element"
                    value={password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                  <span
                    className="password-span"
                    onClick={this.togglePasswordShow}
                  >
                    {showPassword ? <PiEyesFill className="icon" /> : "🙈"}
                  </span>
                </div>
                <label className="username">Confirm Password</label>
                <div className="password-container">
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    id="confirmPassword"
                    className="password-input-element"
                    value={confirmPassword}
                    onChange={(e) =>
                      this.setState({ confirmPassword: e.target.value })
                    }
                  />
                  <span
                    className="password-span"
                    onClick={this.toggleConfirmPasswordShow}
                  >
                    {confirmPasswordVisible ? (
                      <PiEyesFill className="icon" />
                    ) : (
                      "🙈"
                    )}
                  </span>
                </div>
                <button className="login-button" type="submit">
                  Sign In
                </button>
                <p className="login-para">
                  Already have an account? <a href="/login">Login</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Signin);
