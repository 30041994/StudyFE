import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const isValid = checkValidate();
    if (!isValid) {
      toast.error("Email không đúng định dạng!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email: email,
        password: password,
      });

      if (response) {
        toast.success("Đăng nhập thành công!");
      }
      window.location.href = "https://www.google.com";
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Đăng nhập thất bại!");
      } else {
        toast.error("Lỗi máy chủ");
      }
    }
  };

  const checkValidate = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    const isValidEmail = emailRegex.test(email);
    return isValidEmail;
  };

  return (
    <div className="content">
      <ToastContainer />
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
