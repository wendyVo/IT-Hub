import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import CreatePostForm from "./components/CreatePost";
import NavBar from "./components/NavBar";


function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            {/* /* <Route exact path="/favorites" component={FavoritesList} /> */}
            <Route exact path="/posts/:id" component={Detail} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/create-post" component={CreatePostForm}/>
             {/* <Route component={NoMatch} />  */}
            
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
