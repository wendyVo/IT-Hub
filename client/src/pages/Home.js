import React from "react";
import HeaderImage from "../components/HeaderImage";
import NavBar from "../components/NavBar";
import PostsList from "../components/PostList";

function Home() {
  return (
    <React.Fragment>
    <NavBar />
    <HeaderImage />
    <PostsList />
    </React.Fragment>
  );
};

export default Home;
