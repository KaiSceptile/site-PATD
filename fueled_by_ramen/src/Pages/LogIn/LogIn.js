import Footer from "../../Entities/Footer/Footer";
import Header from "../../Entities/Header/Header";
import Authorization from "./Authorization/Authorization";
import React from "react";

function LogIn() {
  return (
    <div>
      <Header />
      <Authorization />
      <Footer />
    </div>
  );
}

export default LogIn;
