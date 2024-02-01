import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event){
    event.preventDefault();
    
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="content">
        <div className="title">Login</div>
        <label className="content-email">Email</label>
        <input
          className="email"
          type="email"
          placeholder="abc@gmail.com"
          onChange={e => setEmail(e.target.value)}
        ></input>
        <label className="content-password">Password</label>
        <input
          className="password"
          type="password"
          placeholder="*********"
          onChange={e => setPassword(e.target.value)}
        ></input>
        <button>
          <Link to="/register">SignUp</Link>
        </button>
        <button>SignIn</button>
      </div>
    </form>
  );
}

export default login;
