import React from "react";
import {
    Button,
    Container,
    Header,
    Message
  } from "semantic-ui-react";
  import Particle from "../../config/Particle";
import "./style.css";
import bannerImage from "../../assets/images/bannerImage.jpg";


function HeaderImage() {
    return (
		<Message size="massive" style={{ position: "relative", overflow: "hidden", 
		backgroundColor: "black"}}>
			<div style={{ position: "absolute", width:"100%"}} className="particle">
			<Particle />
			</div>
          <Container style={{marginBottom: "6rem",marginTop: "5rem"}}>
            <Header size="huge" as="h1" inverted >
              IT Hub
            </Header>
            <p style={{color: "#ffffff"}}>
              Places where Developer can share their Posts
            </p>
            <Button size="large" primary>
              Learn more &raquo;
            </Button>
          </Container>
		  
        </Message>
	); 
    }
export default HeaderImage;