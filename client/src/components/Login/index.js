import React, {useState} from "react";
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment
  } from "semantic-ui-react";
  import axios from "axios";
  import "./style.css";
  import {Redirect} from 'react-router-dom';
  import { useHistory } from "react-router-dom";



function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  let history = useHistory()


  const handleSubmit = (e) => {
      e.preventDefault();
      const user = {email, password}        
      axios.post("/api/user/login", user)
      .then(res => {
          console.log(res);
          history.push("/dashboard")

      })
  }

    return (
<Grid className="login-container" textAlign="center" verticalAlign="middle"  >
<Grid.Column style={{ maxWidth: 450 }}>
  <Header as="h2" color="teal" textAlign="center">
    <img src="/static/images/logo.png" alt="logo" className="image" />{" "}
    Log-in to your account
  </Header>
  <Form size="large" onSubmit={handleSubmit}>
    <Segment stacked>
      <Form.Input
        fluid
        icon="user"
        iconPosition="left"
        placeholder="E-mail address"
        onChange={(e) => setEmail(e.target.value.trim())}
      />
      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value.trim())}
      />
      <Button color="teal" fluid size="large">
        Login
      </Button>
    </Segment>
  </Form>
  <Message>
    New to us? <a href="#root">Sign Up</a>
  </Message>
</Grid.Column>
</Grid>
  
    );
};


export default Login;