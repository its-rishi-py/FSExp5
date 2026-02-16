import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {lazy, Suspense} from 'react';
import "./App.css";
import Dashboard from "./components/dashboard.jsx";
import profilePic from "./assets/wallpaper.jpg.png";
const Dash=lazy(()=>import("./components/dashboard.jsx"));

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="app-name">MyApp</h2>

      <div className="nav-links">
        <Link to="/" className="nav-btn">Profile</Link>
        <Link to="/dashboard" className="nav-btn">Dashboard</Link>
      </div>
    </div>
  );
}
function Profile() {
  return (
    <div className="container">
      <div className="card">
        <h1>Profile Page</h1>

        <img src={profilePic} alt="Profile" className="profile-img" />

        <h2>Projects</h2>
        <ol className="list">
          <li>Salary Prediction Model</li>
          <li>Library Management System</li>
        </ol>

        <h2>Co-Curricular Activities</h2>
        <ol className="list">
          <li>Student Cooridinatior-Rotaract Club of Chandigarh University</li>
        </ol>
      </div>
    </div>
  );
}

function Exp4() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

function App(){
  return (
    <Suspense fallback ={<h1> Loading... Baki kaam kro jaake </h1>}>
      <Dash/>
    </Suspense>
  )
}
export default App;