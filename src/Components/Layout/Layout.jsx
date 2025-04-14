import React, { Children } from "react";
import Header from "../../Components/Header/Header";

function Layout({ children }) {
  return (
    <>
      ,<Header />
      {children}
    </>
  );
}

export default Layout;
