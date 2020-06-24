import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

import AuthorForm from "../components/AuthorForm";

function Authors() {
  // Setting our component's initial state
  const [authors, setAuthors] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all authors and store them with setAuthors
  useEffect(() => {
    loadAuthors()
  }, [])

  // Loads all authors and sets them to authors
  function loadAuthors() {
    API.getAuthors()
      .then(res => 
        setAuthors(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a author from the database with a given id, then reloads authors from the db
  function deleteAuthor(id) {
    API.deleteAuthor(id)
      .then(res => loadAuthors())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveAuthor method to save the author data
  // Then reload authors from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name) {
      API.saveAuthor({
        name: formObject.name,
      
      })
        .then(res => loadAuthors())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Authors Should I Have?</h1>
            </Jumbotron>
            <AuthorForm
              formObject={formObject}
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
            />
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Authors</h1>
            </Jumbotron>
            {authors.length ? (
              <List>
                {authors.map(author => (
                  <ListItem key={author.id}>
                    <Link to={"/authors/" + author.id}>
                      <strong>
                        {author.name}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteAuthor(author.id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Authors;
