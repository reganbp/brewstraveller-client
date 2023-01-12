import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
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
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     {/* <Route index element={<Home />} /> */}
    //     <Route path="/home" element={<Home />} />
    //     {/* <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} /> */}
    //     {/* </Route> */}
    //   </Routes>
    // </BrowserRouter>
    <HashRouter basename="/">
      <div>
        <ul>
          <a href="/#/">
            <li>Login</li>
          </a>
          <a href="/#/Home">
            <li>About</li>
          </a>
        </ul>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </div>
    </HashRouter>
  );
}

export default App;
