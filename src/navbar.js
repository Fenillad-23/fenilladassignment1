import React from "react";
import { Link,Switch,Router } from "react-router-dom";


function Appbar() {
 
  return (
    <nav class="navbar">
    
    <div className="brandInfo">
      <img src="TRENDBAZAR.png" alt="Trend Bazar" class="logo" />
      <a className="brand">
        <h3>Trend Bazar</h3>
      </a>
    </div>

    <div
      className="menu"
      style={{
        display: "flex",
        height: "50px",
        position: "absolute",
        right: "8%",
      }}
    >
      <a href="#home">Home</a>
      <a href="#link">MyCart</a>
      <a href="About">About</a>
      <input
        type="search product"
        className="form-control"
        style={{ height: "40px" }}
        placeholder="Search"
      ></input>
      &nbsp;&nbsp;
      <button
        type="submit"
        style={{
          height: "40px",
          textAlign: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
        class="btn btn-outline-primary"
      >
        search
      </button>
    </div>

    <div class="user-profile">
      <span class="user-icon">👤</span>
      <Link to="/login" className="noStyleLink">Login</Link>
      {/* <span class="user-name">Fenil Lad</span> */}
    </div>
    
  </nav>
    
   
  );
}
export default Appbar;
