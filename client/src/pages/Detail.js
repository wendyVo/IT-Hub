import React, { useEffect } from "react";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";
import {Container, Header} from "semantic-ui-react";

const Detail = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getPost(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))
      .catch(err => console.log(err));
  }, []);

  const addFavorite = () => {
    dispatch({
      type: ADD_FAVORITE,
      post: state.currentPost
    });
  };

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: state.currentPost._id
    });
  };

  return (
    <>{state.currentPost ? (
      <>
     
        <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>{state.currentPost.title} by {state.currentPost.author}</Header>
      <p>{state.currentPost.body}</p>
      
    </Container>
      </>
    
    ) : (
      <div>loading...</div>
    )}</>
  );
};

export default Detail;
