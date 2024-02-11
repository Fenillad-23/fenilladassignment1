// Layout.js

import React from "react";
import Nav from "./Appbar";

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
