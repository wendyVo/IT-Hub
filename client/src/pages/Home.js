import React from "react";
import PostsList from "../components/PostList";
import ResponsiveContainer from "../components/ResponsiveLayout";
// import { Col, Row, Container } from "../components/Grid";
// import CreatePostForm from "../components/CreatePostForm";
// import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <ResponsiveContainer>
      <PostsList />
    </ResponsiveContainer>
  );
};

export default Home;
