import React from "react";
import banner from "../images/hops-brew.jpg";
import classes from "./homeBanner.module.css";

const HomeBanner = () => {
  return (
    <>
      <header className={classes.header}>
        <h1 style={{ fontSize: "8vw", color: "oldlace" }}> Brews Traveller </h1>
        <p style={{ paddingLeft: "48%", fontSize: "4vw", color: "oldlace" }}>
          Veni, Vedi, Bibi
        </p>
      </header>{" "}
      <div className={classes["main-image"]}>
        <img src={banner} alt="table" />
        {/* <h1>Brew Traveller</h1> */}
      </div>
    </>
  );
};

export default HomeBanner;
