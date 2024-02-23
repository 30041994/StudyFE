// import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    console.log("email: ", email);
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    const isValid = emailRegex.test(email);
    console.log("check: ", isValid);

    if (!isValid) {
      alert("Email khong dung dinh dang!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        email: email,
        password: password,
      });

      // Xử lý kết quả từ backend
      console.log(response.data);
      // window.location.href = "http://localhost:5173";
      navigate("/");
    } catch (error) {
      // Xử lý lỗi
      console.error("Error during login:", error);
    }
  };
  return (
    <>
      <div className="content">
        <div className="title">Register</div>
        <label className="content-email">*Email</label>
        <input
          className="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abc@gmail.com"
        ></input>
        <label className="content-password">*Password</label>
        <input
          className="password"
          type="password"
          placeholder="*********"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label className="content-date">Birthday</label>
        <input type="date" required></input>
        <div className="content-gender">
          <label htmlFor="option1">Gender :</label>
          <input
            type="radio"
            id="option1"
            name="gender"
            value="male"
            required
          />
          <label htmlFor="option1">Nam</label>

          <input
            type="radio"
            id="option2"
            name="gender"
            value="female"
            required
          />
          <label htmlFor="option2">Nữ</label>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        {/* <button onClick={handleSubmit}>
          <Link onClick={handleSubmit} to="/">
            Submit
          </Link>
        </button> */}
      </div>
    </>
  );
}

export default Register;
