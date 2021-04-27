import React from "react";
import HeaderImage from "../components/HeaderImage";
import MainNav from "../components/NavBar";
import PostsList from "../components/PostList";
// import { Col, Row, Container } from "../components/Grid";
// import CreatePostForm from "../components/CreatePostForm";
// import PostsList from "../components/PostsList";

const Home = () => {
  return (
    // <ResponsiveContainer>
    //   <PostsList />
    // </ResponsiveContainer>
    <React.Fragment>
    <MainNav />
    <HeaderImage />
    <PostsList />
    </React.Fragment>
  );
};

export default Home;
