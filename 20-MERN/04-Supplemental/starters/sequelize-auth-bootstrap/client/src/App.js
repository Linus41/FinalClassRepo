import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Requirements, Forum } from "./pages";
import Auth from "./pages/Auth"
import { Navigation, Error } from "./components";
import { Container } from 'react-bootstrap';
import API from './utils/API';

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("")

  function loginUser(email, password) {
    const data = {
      email: email,
      password: password
    }
    API.Auth.login(data).then(res => {
      setUser(res.data)

    })
  }

  function signupUser(email, password) {
    const data = {
      email: email,
      password: password
    }
    API.Auth.signup(data).then(res => {
      setUser(res.data)
    }).catch(err => {
      setError("Email already taken")
    })
  }

  function logoutUser() {
    API.Auth.logout().then(res => {
      setUser({});
    })
  }

  function clearError(){
    setError("");
  }

  return (
    <>
      <Router>
        <Container>
          <Navigation user={user} logoutUser={logoutUser} />
          {error && <Error error={error} clearError={clearError}/>}
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path={["/requirements"]}>
              <Requirements />
            </Route>
            <PrivateRoute exact user={user} path={["/forum"]}>
              <Forum user={user}/>
            </PrivateRoute>
            <Route exact path={["/login", "/signup"]}>
              <Auth
                user={user}
                loginUser={loginUser}
                signupUser={signupUser}
              />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

function PrivateRoute(props) {
  return (
    <>
      {props.user.email ?
        <Route {...props}>
          {props.children}
        </Route>
        :
        <Redirect to="/login" />
      }
    </>
  )
}

export default App;
