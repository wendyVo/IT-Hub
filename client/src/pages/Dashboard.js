import React from "react";
import {Container, Header, Button, Grid} from "semantic-ui-react";
import {Link} from "react-router-dom";
import NavBar from "../components/NavBar";

function Dashboard() {
    return (
        <Container>
            <NavBar />
            <div style={{
          textAlign: "center",
          marginTop: "5em",
        }}>
            <Header as="h2">User Dashboard</Header>
            <Button primary>
                <Link to="/create-post">Create Post</Link>
            </Button>
            </div>
        </Container>
    )
}

export default Dashboard;