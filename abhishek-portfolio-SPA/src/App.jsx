import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        
        <Footer />
      </BrowserRouter>
    </>
  );
}
