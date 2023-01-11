import React from "react";
import BrewCard from "./components/brewCard";
import HomeBanner from "./components/homeBanner";
import TopNav from "./components/navbar";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <TopNav />
      <h1>Home</h1>
      <BrewCard />
    </>
  );
};

export default Home;
