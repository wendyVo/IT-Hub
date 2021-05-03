import React from "react";
import HeaderImage from "../components/HeaderImage";
import MainNav from "../components/NavBar";
import PostsList from "../components/PostList";

function Home() {
  return (
    <React.Fragment>
    <MainNav />
    <HeaderImage />
    <PostsList />
    </React.Fragment>
  );
};

export default Home;
