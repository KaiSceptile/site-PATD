import "./Registration.css";
import React from "react";
import { Link } from "react-router-dom";

function Registration() {
  async function sign_up(user, password, email) {
    const response = await fetch("/sign-up", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: password,
        email: email
      }),
    });

    let tokenn = await response.json();
    if (tokenn != null) {
      document.cookie = `token=${tokenn}`;
    } else {
      document.cookie = `token=no-authorized`;
    }
  }
  async function onClick() {
    if (
      document.getElementById("password1").value ===
      document.getElementById("password2").value
    ) {
      sign_up(
        document.getElementById("user").value,
        document.getElementById("password1").value,
        document.getElementById("email").value
      );
    } else {
      alert("Password are not equal!");
    }
  }
  return (
    <form className="registration">
      <div className="reg-title">
        <h3>Sign Up</h3>
      </div>
      <div className="field">
        <p>Username:</p>
        <input id="user" type="text" name="username" />
      </div>
      <div className="field">
        <p>Email:</p>
        <input id="email" type="email" name="email" />
      </div>
      <div className="field">
        <p>Password:</p>
        <input id="password1" type="text" name="password" />
      </div>
      <div className="field">
        <p>Reenter password:</p>
        <input id="password2" type="text" name="second-password" />
      </div>
      <button onClick={onClick}>
        Submit
      </button>
      <Link to="/login">
        <button className="log-in">Log In</button>
      </Link>
    </form>
  );
}

export default Registration;
