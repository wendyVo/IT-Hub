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
  import {Link} from "react-router-dom";
  import { useHistory } from "react-router-dom";
  import FileUploader from "../Common/FileUploader"

function SignUp() {
    const [name, setName] = useState();
    // const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [selectedFile, setSelectedFile] = useState(null);
    let history = useHistory()
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
          name,
          // username,
          email,
          password,
          password2,
          selectedFile
        };

        // const formData = new FormData();
        // FormData.append("file", selectedFile)

        axios.post("/api/user/signup", user).then((res) => {
          history.push("/login");
          });
        };
    return (
        <Grid textAlign='center' style={{ height: '150vh'}} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            {/* <Image src='/logo.png' /> Log-in to your account */}
            Create a new Account
          </Header>
          <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
          {/* <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
            /> */}
                <Form.Input label = "Full Name" type="text" onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
                {/* <Form.Input label = "UserName" type="text" onChange={(e) => setUsername(e.target.value)} placeholder="UserName" required /> */}
                <Form.Input label="Email address"
                //  error={{
                //     content: 'Please enter a valid email address',
                //     pointing: 'below',
                //   }} 
                onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"  />
                <Form.Input label="Password"  onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required />
                <Form.Input label="Confirm Password"  onChange={(e) => setPassword2(e.target.value)} placeholder="Confirm Password" type="password" required/>
              <Button color='teal' fluid size='large'>
               Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already created an account <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
}

export default SignUp;