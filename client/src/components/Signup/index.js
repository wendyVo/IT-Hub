import axios from "axios";
import React,{useState} from "react";
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment
  } from "semantic-ui-react";

function SignUp() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
          username,
          email,
          password,
          password2,
        };

        axios.post("/api/signup", user).then((res) => {
            window.location = "/login";
          });
        };
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            {/* <Image src='/logo.png' /> Log-in to your account */}
            Create a new Account
          </Header>
          <Form size='large' onSubmit={handleSubmit}>
            <Segment stacked>
                <Form.Input label = "UserName" type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Full Name" required />
                <Form.Input label="Email address"
                //  error={{
                //     content: 'Please enter a valid email address',
                //     pointing: 'below',
                //   }} 
                  placeholder="E-mail"  />
                <Form.Input label="Password"  onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                <Form.Input label="Confirm Password"  onChange={(e) => setPassword2(e.target.value)} placeholder="Confirm Password" type="password" />
              <Button color='teal' fluid size='large'>
               Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already created an account <a href='#'>Login</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
}

export default SignUp;