import React from "react";
import { Image, Item } from "semantic-ui-react";
import Moment from "react-moment";


// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <Item.Group divided>
      {children}
    </Item.Group>
  );
}

export function ListItem(props) {
  return (
    <Item>
    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

    <Item.Content>
      <Item.Header as='a'>{props.postTitle}</Item.Header>
      <Item.Meta><Moment format="DD-MM-YYYY">
      {props.date}
            </Moment></Item.Meta>
      <Item.Description>
        {props.body}
      </Item.Description>
      <Item.Extra>{props.author}</Item.Extra>
    </Item.Content>
  </Item>
  )
  
}
