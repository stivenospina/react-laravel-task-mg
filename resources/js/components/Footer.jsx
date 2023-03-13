import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Footer() {
    return (
        <Navbar bg="dark" fixed="bottom">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="assets/img/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Footer;

if (document.getElementById("footer")) {
    const Index = ReactDOM.createRoot(document.getElementById("footer"));

    Index.render(
        <React.StrictMode>
            <Footer />
        </React.StrictMode>
    )
}