import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    const [publicURL, setPublicURL] = useState('/home');
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="/">Task Management</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#">
                            <Link to={`${publicURL}`} >Home</Link>
                        </Nav.Link>
                        <Nav.Link href="#">
                            {/* <Link to={`${publicURL}`} >About</Link> */}
                        </Nav.Link>
                        <Nav.Link href="#">
                            {/* <Link to={`${publicURL}`} >Contact</Link> */}
                        </Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </>
    );
}


export default Header;

if (document.getElementById("header")) {
    const Index = ReactDOM.createRoot(document.getElementById("header"));

    Index.render(
        <React.StrictMode>
            <Header />
        </React.StrictMode>
    )
}