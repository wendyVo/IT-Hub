import React from "react";
import MainNav from "../components/NavBar";
import Login from "../components/Login"
import { Container } from "semantic-ui-react";

function LoginPage() {
  return (
    <Container>
    <MainNav />
    <Login />
    </Container>
  );
};

export default LoginPage;