import React from "react";
import { Grid, Menu, Divider} from "semantic-ui-react";
import {Link} from "react-router-dom";
import "./style.css"

function DashboardLayout({children}) {
    return(
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
              <Menu.Item >
              <Link to="/favorites">View Favorites</Link>
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
              {children}
            </Grid>
          </Grid.Column>
        </Grid>
        </div>
    )
}

export default DashboardLayout;