import React from "react";
import { Link } from "react-router-dom";
import './Appbar.css';

function Appbar() {
  const username = localStorage.getItem("username") || "";
  const isAdmin = username === "admin@gmail.com";

  return (
    <nav className="navbar" style={{ position: "fixed" }}>

      <div className="brandInfo">
        <img src="TRENDBAZAR.png" alt="Trend Bazar" className="logo" />
        <a className="brand">
          <h3>Trend Bazar</h3>
        </a>
      </div>

      <div className="menu-wrapper">
        <div className="menu">
          <a href="/home" className="noStyleLink" >Home</a>
          {isAdmin
            ? (<><Link to="/addProduct" className="noStyleLink" >Add Product</Link></>)
            : (<><Link to="/cart" className="noStyleLink" >Cart</Link>
              <a href="/About" className="noStyleLink" >My Orders</a></>)}
          <Link to="/profile" className="noStyleLink" >Edit profile</Link>
        </div>

        <div className="user-profile" style={{ marginBottom: "10px" }}>
          <span className="user-icon">👤</span>
          <Link to="/login" className="noStyleLink" >{username == "" ? <p>Login</p> : <p>{username}</p>}</Link>
          {/* <span className="user-name">Fenil Lad</span> */}
        </div>
      </div>
    </nav>
  );
}

export default Appbar;
