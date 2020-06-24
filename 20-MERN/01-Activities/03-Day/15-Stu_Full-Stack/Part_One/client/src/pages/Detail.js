import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import BookForm from "../components/BookForm";

function Detail(props) {
  const [book, setBook] = useState({})
  const [formObject, setFormObject] = useState({ title: "", author: "", synopsis: "" })

  // When this component mounts, grab the book with the id of props.match.params.id
  // e.g. localhost:3000/books/1
  const { id } = useParams();

  useEffect(() => {
    loadBook(id)
  }, [])

  function loadBook(id) {
    API.getBook(id)
      .then(res => {
        setBook(res.data)
        setFormObject(res.data)
      })
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
    if (formObject.title && formObject.author) {
      API.updateBook(id, {
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => { loadBook(id) })
        .catch(err => console.log(err));
    }
  };



  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              {book.title} by {book.author}
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Synopsis</h1>
            <p>
              {book.synopsis}
            </p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Update</h1>
            <BookForm
              formObject={formObject}
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
            />
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/">← Back to Authors</Link>
        </Col>
      </Row>
    </Container>
  );
}


export default Detail;
