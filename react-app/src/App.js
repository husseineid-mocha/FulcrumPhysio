import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User/User.js";
import Homepage from "./components/Homepage";
import Exercises from "./components/Exercises";
import { authenticate } from "./services/auth";

import * as sessionActions from "./store/session";

import LoginModal from "./components/LoginFormModal";
import SignUpModal from "./components/SignUpFormModal";
import ExerciseModal from "./components/ExerciseModal";
import QuestionModal from "./components/Homepage/QuestionModal";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "14px",
        backgroundColor: "rgb(212,45,48)",
      },
      arrow: {
        color: "rgb(212,45,48)",
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  },
});

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
    <ThemeProvider theme={theme}>
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
        <ExerciseModal
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
        <QuestionModal
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
          <ProtectedRoute
            authenticated={authenticated}
            exact={true}
            path="/home"
          >
            <Homepage
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </ProtectedRoute>
          <ProtectedRoute
            authenticated={authenticated}
            exact={true}
            path="/exercises"
          >
            <Exercises
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
            path="/users/:id"
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
    </ThemeProvider>
  );
}

export default App;
