import axios from "axios";
import React, { useEffect, useState } from "react";
import BrewCard from "./components/brewCard";
import HomeBanner from "./components/homeBanner";
import TopNav from "./components/navbar";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const Home = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log(post);

  return (
    <>
      <HomeBanner />
      <TopNav />
      <h1>Home</h1>
      <BrewCard title={post.title} body={post.body} />
    </>
  );
};

export default Home;
