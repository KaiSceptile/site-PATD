import "./Authorization.css";
import React from "react";
import { Link } from "react-router-dom";

function Authorization() {
  async function login(user, password) {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: user, password: password }),
    });
    let tokenn = await response.json();
    if (tokenn != null) {
      document.cookie = `token=${tokenn}`;
    } else {
      document.cookie = `token=no-authorized`;
    }
  }
  async function onClick() {
    login(
      document.getElementById("user").value,
      document.getElementById("password").value
    );
  }

  return (
    <form className="authorization">
      <div className="auth-title">
        <h3>Log In</h3>
      </div>
      <div className="field">
        <p>Username:</p>
        <input id="user" type="text" name="username" />
      </div>
      <div className="field">
        <p>Password:</p>
        <input id="password" type="text" name="password" />
      </div>
      <a>Forgot password?</a>
      <button type="submit" onClick={onClick}>Submit</button>
      <Link to="/signup">
        <button className="sign-up">Sign Up</button>
      </Link>
    </form>
  );
}

export default Authorization;
