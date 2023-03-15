import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, Container } from 'react-router-dom';
import About from './About';
import Contact from './Contact';



function Home() {
    return (
        <>
            <Container>

            
            <div>
                <Router>
                    <div>
                        {/* <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/users">Users</Link>
                                </li>
                            </ul>
                        </nav> */}

                        {/* A <Switch> looks through its children <Route>s and
                            renders the first one that matches the current URL. */}
                        <Routes>
                            <Route path="/about" >
                                <About />
                            </Route>
                            <Route path="/contact" >
                                <Contact />
                            </Route>
                            <Route path="/" >
                                <Home />
                            </Route>
                        </Routes>
                    </div>
                </Router>
            </div>
            </Container>
        </>
    );
}


export default Home;

if (document.getElementById("apps")) {
    const Index = ReactDOM.createRoot(document.getElementById("apps"));

    Index.render(
        <React.StrictMode>
            <Home />
        </React.StrictMode>
    )
}
