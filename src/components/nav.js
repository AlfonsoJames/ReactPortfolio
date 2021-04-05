import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavComponent() {
    

    return (
        <nav>
            <Navbar bg="light" expand="md">
                <Navbar.Brand >Alfonso James</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    );
};

export default NavComponent;