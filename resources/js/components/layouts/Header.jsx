import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [publicURL, setPublicURL] = useState('/home');
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="/">Task Management</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to={`${publicURL}/`} >Home</Link>
                    
                        <Link className="nav-link" to={`${publicURL}/about`} >About</Link>
                    
                        <Link className="nav-link" to={`${publicURL}/contact`} >Contact</Link>

                        <Link className="nav-link" to={`${publicURL}/projects`} >Projects</Link>
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

// if (document.getElementById("header")) {
//     const Index = ReactDOM.createRoot(document.getElementById("header"));

//     Index.render(
//         <React.StrictMode>
//             <Header />
//         </React.StrictMode>
//     )
// }