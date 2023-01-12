import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Banner />
    //   </header>
    // </div>
    // <Fragment>
    //   <Banner />
    //   <Login />
    // </Fragment>
    <BrowserRouter basename="reganbp.github.io/brewstraveller">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/home" element={<Home />} />
        {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
