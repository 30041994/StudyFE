// import React from 'react'
import { Link } from "react-router-dom";
import "./index.css";

function login() {
  return (
    <>
      <div className="content">
        <div className="title">Login</div>
        <label className="content-email">Email</label>
        <input
          className="email"
          type="email"
          placeholder="abc@gmail.com"
        ></input>
        <label className="content-password">Password</label>
        <input
          className="password"
          type="password"
          placeholder="*********"
        ></input>
        <button>
          <Link to="/register">SignUp</Link>
        </button>
        <button>SignIn</button>
      </div>
    </>
  );
}

export default login;
