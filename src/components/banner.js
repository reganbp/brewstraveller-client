import React, { Fragment } from "react";
import banner from "../images/hops-brew.jpg";
import classes from "./banner.module.css";

const Banner = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> Brews Traveller </h1>
        <p style={{ padding: "5% 20%%" }}> Veni, Vedi, Bibi</p>
      </header>{" "}
      <div className={classes["main-image"]}>
        <img src={banner} alt="table" />
        <h1>Brew Traveller</h1>
      </div>
    </Fragment>
  );
};

export default Banner;
