import React from 'react';
import { Nav, NavbarList } from '../styled/Nav.style';
import { Container, Row, Col } from '../styled/Layout.style';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const theme = useSelector((state: any) => state.themeReducer.theme);

  return (
    <Nav>
      <Container fluid>
        <Row>
          <Col>
            <Link className="navbar-brand" to="/">
              React-{ theme.name }
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
                <Link to="/profile">Profile</Link>
              </li>
            </NavbarList>
          </Col>
        </Row>
      </Container>
    </Nav>
  );
};

export default Navbar;
