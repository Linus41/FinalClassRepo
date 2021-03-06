import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

import BookForm from "../components/BookForm";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({title:"", synopsis:"", AuthorId: ""})
  const [authors, setAuthors] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
    loadAuthors();
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Loads all books and sets them to books
  function loadAuthors() {
    API.getAuthors()
      .then(res =>
        setAuthors(res.data)
      )
      .catch(err => console.log(err));
  };



  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.AuthorId) {
      API.saveBook({
        title: formObject.title,
        AuthorId: formObject.AuthorId,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>What Books Should I Read?</h1>
          </Jumbotron>
          <BookForm
            formObject={formObject}
            authors={authors}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
          />
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Books On My List</h1>
          </Jumbotron>
          {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book.id}>
                  <Link to={"/books/" + book.id}>
                    <strong>
                      {book.title} by {book.Author.name}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteBook(book.id)} />
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


export default Books;
