import React from "react";
import MainNav from "../components/NavBar";
import SignUp from "../components/Signup"
import { Container } from "semantic-ui-react";

function SignupPage() {
  return (
    <Container>
    <MainNav />
    <SignUp />
    </Container>
  );
};

export default SignupPage;