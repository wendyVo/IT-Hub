import React from "react";
import {Container, Header, Button, Grid} from "semantic-ui-react";
import {Link} from "react-router-dom";
import NavBar from "../components/NavBar";

const Dashboard =  ({
    getCurrentProfile,
    deleteAcount,
    auth: {user},
    profile: {profile}

}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
}
    return (
        <Container>
            <NavBar />
            <div style={{
          textAlign: "center",
          marginTop: "5em",
        }}>
            <Header as="h2">{title} Dashboard</Header>
            <Button primary>
                <Link to="/create-post">Create Post</Link>
            </Button>
            </div>
        </Container>
    )
}

export default Dashboard;