import {React, useState} from 'react';
import { Link, useLocation} from 'react-router-dom';
import { FaStickyNote } from "react-icons/fa";
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';


const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();

  return (
    <Navbar bg="success" variant="light" expand="md" className="custom-toggle"  height={400}>
      <Container fluid>
        <Navbar.Brand href="/">
          <FaStickyNote size="24px" className="me-2" />
          BlocDeNotas
        </Navbar.Brand>
        <Navbar.Toggle
        className="toggle"
        aria-controls="basic-navbar-nav"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            height="2rem"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            height="2rem"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </Navbar.Toggle>
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto text-center">
            <Nav.Link href='#home' as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link href='#create' as={Link} to="/create" className={location.pathname === '/create' ? 'active' : ''}>Create</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;