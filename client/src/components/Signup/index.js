import axios from "axios";
import React,{useState, useRef} from "react";
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
  import PicDropDiv from "../Common/PicDropDiv";
  import uploadPicCloundinary from "../../utils/uploadPicCloundinary";

function SignUp() {
  const [name, setName] = useState();
  // const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [highlighted, setHighlighted] = useState(false);
  const [fileInputState, setFileInputState] = useState();
  const [url,setUrl] = useState("")
  const inputRef = useRef();
  let history = useHistory()

    const handleMediaChange = e => {
      const file = e.target.files[0];

      setMediaPreview(URL.createObjectURL(file));
      setMedia(file);
      setFileInputState(e.target.value);  
    }
   
    
  
    const handleSubmit = e => {
      e.preventDefault();
      const user = {
        name,
        email,
        password,
        password2,
        profilePicUrl:url
      }
  
      // let profilePicUrl;
      // if (media !== null) {
      //   profilePicUrl = await uploadPicCloundinary(media);
      // }
  
      // if (media !== null && !profilePicUrl) {
      //   return console.log("Error Uploading Image");
      // }
  
      // await registerUser(user, profilePicUrl, setErrorMsg, setFormLoading);
       axios.post("/api/user/signup",user).then((res) => {
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
          <PicDropDiv
            mediaPreview={mediaPreview}
            setMediaPreview={setMediaPreview}
            setMedia={setMedia}
            inputRef={inputRef}
            highlighted={highlighted}
            setHighlighted={setHighlighted}
            handleChange={handleMediaChange}
          />
                <Form.Input label = "Full Name" type="text"  name="name"
            onChange={(e) => setName(e.target.value)} 
            placeholder="Full Name" required />
                {/* <Form.Input label = "UserName" type="text" onChange={(e) => setUsername(e.target.value)} placeholder="UserName" required /> */}
                <Form.Input label="Email address"
                //  error={{
                //     content: 'Please enter a valid email address',
                //     pointing: 'below',
                //   }} 
                onChange={(e) => setEmail(e.target.value)}
            type="text"
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