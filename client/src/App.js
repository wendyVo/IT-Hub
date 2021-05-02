import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            {/* /* <Route exact path="/favorites" component={FavoritesList} /> */}
            <Route exact path="/posts/:id" component={Detail} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
             {/* <Route component={NoMatch} />  */}
            
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
