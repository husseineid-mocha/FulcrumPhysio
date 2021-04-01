import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Homepage from "./components/Homepage";
import { authenticate } from "./services/auth";

import * as sessionActions from "./store/session";

import LoginModal from "./components/LoginFormModal";
import SignUpModal from "./components/SignUpFormModal";

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      dispatch(sessionActions.restoreUser());
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <LoginModal
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      ></LoginModal>
      <SignUpModal
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <Switch>
        <Route exact path="/">
          <Home
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <ProtectedRoute authenticated={authenticated} exact path="/home">
          <Homepage
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </ProtectedRoute>
        <Route path="/login" exact={true}></Route>
        <Route path="/sign-up" exact={true}></Route>
        <ProtectedRoute
          path="/users"
          exact={true}
          authenticated={authenticated}
        >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
