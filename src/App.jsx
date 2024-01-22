// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login/login";
import Register from "./component/Login/register";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path='/products' element={<Products />} />
      <Route path='/customers' element={<Customers />} /> */}
    </Routes>
  );
}

export default App;
