import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, NavLink, Nav } from "react-bootstrap";

const Navigator = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="linkNav">
              NBA
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/teams" className="linkNav">
                Teams
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/addteam" className="linkNav">
                Add Teams
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register" className="linkNav">
                Register New User
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/admin" className="linkNav linkLogin">
                Admin
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login" className="linkNav linkLogin">
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default Navigator;
