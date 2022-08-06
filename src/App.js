import Sidebar from "./Components/SIdebar";
import Dashboard from "./Components/Dashboard";
import React from "react";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="container-wrap">
      <Sidebar />
      <div className="nav-dashboard">
        <Navbar props="half" />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
