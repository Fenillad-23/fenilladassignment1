// Layout.js

import React from "react";
import Nav from "./navbar";

function Layout({ children }) {
    console.log(children); 
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default Layout;
