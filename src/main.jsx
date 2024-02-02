import React from "react";
import APP from "./App.jsx";
import "./index.css";
import Header from "./Header1.jsx";
import { createRoot } from "react-dom";
import Footer from "./Footer.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <APP />
    {/* <Footer/> */}
  </React.StrictMode>
);
