import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
    <Footer />
  </React.StrictMode>
);
