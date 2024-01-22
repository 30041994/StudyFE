// import React from 'react'
import "./index.css";

function Register() {
  return (
    <>
      <div className="content">
        <div className="title">Register</div>
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
        <label className="content-date">
          Ngày tháng năm sinh:
          <input type="date" required></input>
        </label>
        <div className="content-gender">
          <label htmlFor="option1">Giới tính:</label>
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
        <button>Submit</button>
      </div>
    </>
  );
}

export default Register;
