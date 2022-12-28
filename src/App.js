import { Fragment } from "react";
import "./App.css";
import Banner from "./components/banner.js";
import Login from "./components/login";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Banner />
    //   </header>
    // </div>
    <Fragment>
      <Banner />
      <Login />
    </Fragment>
  );
}

export default App;
