import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from 'react';
import "./App.css";
import profilePic from "./assets/wallpaper.jpg.png";

const Dash = lazy(() => import("./components/dashboard.jsx"));

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
          <li>Student Coordinator - Rotaract Club of Chandigarh University</li>
        </ol>
      </div>
    </div>
  );
}

function Exp4() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<h1>Loading... Baki kaam kro jaake</h1>}>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/dashboard" element={<Dash />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

function App(){
  return <Exp4 />;
}

export default App;
