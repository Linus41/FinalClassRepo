import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Authors from "./pages/Authors";
import AuthorDetail from "./pages/AuthorDetail";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <BookDetail />
          </Route>
          <Route exact path={["/authors"]}>
            <Authors />
          </Route>
          <Route exact path={"/authors/:id"}>
            <AuthorDetail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
