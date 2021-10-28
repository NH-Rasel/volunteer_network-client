import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img style={{ width: '200px' }} src="https://i.ibb.co/3BXwgWB/Group-1329.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className="text-dark fw-bold">Home</Nav.Link>
                        <Nav.Link as={Link} to="/donation" className="text-dark fw-bold">Donation</Nav.Link>
                        <Nav.Link as={Link} to="/events" className="text-dark fw-bold">Events</Nav.Link>
                        <Nav.Link as={Link} to="/blog" className="text-dark fw-bold">Blog</Nav.Link>
                        <button className="btn btn-primary me-3"><Link style={{ textDecoration: 'none', color: 'white', padding: '0px 25px' }} to="/register">Register</Link></button>
                        <button className="btn btn-dark"><Link style={{ textDecoration: 'none', color: 'white', padding: '0px 25px' }} to="/admin">Admin</Link></button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;