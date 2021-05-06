import React, {useEffect, useState} from "react";
import {Container, Header, Button, Grid, Menu, Divider, Label, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";
import NavBar from "../components/NavBar";
import  getProfileById  from "../utils/profileAction";
import ProfileTop from "../components/Profile/ProfileTop"
import axios from "axios";
import "./cssPage/dashboard.css";

const Dashboard = () => {
    const [name, setUserName] = useState();
    const [userId, setUserId] = useState();
    const [profilePic, setProfilePic] = useState();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = () => {
        axios.get("/api/user")
        .then((results) => {
            console.log(results.data);
            setUserName(results.data.name);
            setUserId(results.data._id);
            setProfilePic(results.data.profilePic)
        })
        .catch((err) => console.log(err));
    }

    return (
        <div style={{
            marginTop: "4em",
            position:"relative"
          }}>
        <Grid padded>
          <Grid.Column
            mobile={3}
            tablet={3}
            computer={3}
            only="tablet computer"
            id="sidebar"
          >
            <Menu vertical borderless fluid text>
              <Menu.Item active as="a">
              <Link style={{color: "#ffffff"}} to="/create-post">Create Post</Link>
              </Menu.Item>
              <Menu.Item as="a">Edit Post</Menu.Item>
              <Menu.Item as="a">Update Post</Menu.Item>
              <Menu.Item as="a">Delete Post</Menu.Item>
              <Divider hidden />
            </Menu>
          </Grid.Column>
          <Grid.Column
            mobile={13}
            tablet={13}
            computer={13}
            floated="right"
            id="content"
          >
            <Grid padded>
              <Grid.Row>
                <Header dividing size="huge" as="h1">
                  {name }'s Dashboard
                </Header>
              </Grid.Row>
              <Grid.Row textAlign="center">
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src={profilePic}
                  />
                  <Label basic size="large">
                    Profile Picture
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={12}>
                    {/* //User Image */}
                  <Label basic size="large">
                    Bio
                  </Label>
                  <p>Something about myself</p>
                </Grid.Column>
                {/* <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="/static/images/wireframe/square-image.png"
                  />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column> */}
              </Grid.Row>
              <Divider section hidden />
              <Grid.Row>
                <Header dividing size="huge" as="h1">
                  Section title
                </Header>
              </Grid.Row>
              <Grid.Row>
                <p>Social Link</p>
                    
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
        </div>
    )
}


export default Dashboard;