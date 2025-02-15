import React from "react";
import Logo from "./Logo";
import './App.css';
import './layout.css';

import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
    
    <div className="background-image">
      <Logo />
      <div className="comingSoon">C o m i n g S o o n </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
