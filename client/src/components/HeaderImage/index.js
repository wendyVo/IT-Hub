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
            
              A place where Developers can <br/> share their thoughts, creative ideas and personal growth with one another
            </p>
            <Button size="large" primary >
             Login to create post &raquo;
            </Button>
          </Container>
		  
        </Message>
	); 
    }
export default HeaderImage;