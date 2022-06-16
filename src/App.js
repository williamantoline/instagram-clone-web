import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "App.css";
import "assets/scss/style.scss";
import Home from "pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;