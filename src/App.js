import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Routing from "./components/Routing";
// import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
    
      <Routing />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
