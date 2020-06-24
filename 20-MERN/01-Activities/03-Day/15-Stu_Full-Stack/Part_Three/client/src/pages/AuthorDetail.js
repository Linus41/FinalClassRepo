import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import AuthorForm from "../components/AuthorForm";

function AuthorDetail(props) {
  const [author, setAuthor] = useState({})
  const [formObject, setFormObject] = useState({ name: "" })

  // When this component mounts, grab the author with the id of props.match.params.id
  // e.g. localhost:3000/authors/1
  const { id } = useParams();

  useEffect(() => {
    loadAuthor(id)
  }, [])

  function loadAuthor(id) {
    API.getAuthor(id)
      .then(res => {
        setAuthor(res.data)
        setFormObject(res.data)
      })
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveAuthor method to save the author data
  // Then reload authors from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name) {
      API.updateAuthor(id, {
        name: formObject.name,
      })
        .then(res => { loadAuthor(id) })
        .catch(err => console.log(err));
    }
  };



  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              {author.name}
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Author Information</h1>
            <p>
              {author.name}
            </p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Update</h1>
            <AuthorForm
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


export default AuthorDetail;
