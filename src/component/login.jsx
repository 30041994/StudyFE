import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email: email,
        password: password,
      });

      // Xử lý kết quả từ backend
      console.log(response.data);
      window.location.href = "https://www.google.com";
    } catch (error) {
      // Xử lý lỗi
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="content">
      <div className="title">Login</div>
      <label className="content-email">Email</label>
      <input
        className="email"
        type="email"
        placeholder="abc@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label className="content-password">Password</label>
      <input
        className="password"
        type="password"
        placeholder="*********"
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <Link to="/register">
        <button>Create new account</button>
      </Link>
      <button onClick={handleLogin}>SignIn</button>
    </div>
  );
}

export default Login;
