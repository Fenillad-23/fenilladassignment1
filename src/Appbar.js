import React from "react";
import {Link} from "react-router-dom";


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
       <input
        type="search product"
        className="form-control"
        style={{ height: "40px", width:"550px" }}
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
          marginRight:"100px"
        }}
        class="btn btn-outline-info"
      >
        search
      </button>
      <a href="#home">Home</a>
      <a href="">MyCart</a>
      <a href="About">About</a>
     
    </div>

    <div class="user-profile" style={{marginBottom:"23px"}}>
      <span class="user-icon">👤</span>
      <Link to="/login" className="noStyleLink" >Login</Link>
      {/* <span class="user-name">Fenil Lad</span> */}
    </div>
    
  </nav>
    
   
  );
}
export default Appbar;
