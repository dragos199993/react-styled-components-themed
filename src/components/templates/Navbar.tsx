import React from 'react';
import { Nav, NavbarList } from '../styled/Nav.style';
import { Container, Row, Col } from '../styled/Layout.style';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <Container fluid>
        <Row>
          <Col>
            <Link className="navbar-brand" to="/">
              React-concept
            </Link>
          </Col>
          <Col position="flex-end">
            <NavbarList>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="/">Profile</a>
              </li>
            </NavbarList>
          </Col>
        </Row>
      </Container>
    </Nav>
  );
};

export default Navbar;
