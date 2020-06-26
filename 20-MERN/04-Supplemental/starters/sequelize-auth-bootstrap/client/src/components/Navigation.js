import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation(props) {
  const { user, logoutUser } = props;

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/home">Project 3</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/requirements">Requirements</Nav.Link>
        <Nav.Link as={Link} to="/forum">Forum</Nav.Link>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {user.email ?
          <>
            <Nav>
              <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
            </Nav>
            <Navbar.Text>
              Signed in as: {user.email}
            </Navbar.Text>
          </>
          :
          <>
            <Nav>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            </Nav>
          </>
        }
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;