import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './layouts/Footer';
import Header from './layouts/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProjectList from './pages/projects/ProjectList';

class App extends Component {
    state = {
        PUBLIC_URL: "/home",
    }
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <div>
                        <Container className='p-4'>
                            {/* A <Switch> looks through its children <Route>s and
                                renders the first one that matches the current URL. */}
                            <Switch>
                                <Route path={`${this.state.PUBLIC_URL}/`} >
                                    {/* <Home /> */}
                                    <ProjectList />
                                </Route>
                                <Route path={`${this.state.PUBLIC_URL}/about`} >
                                    <About />
                                </Route>
                                <Route path={`${this.state.PUBLIC_URL}/contact`} >
                                    <Contact />
                                </Route>
                                <Route path={`${this.state.PUBLIC_URL}/projects`} >
                                    <ProjectList />
                                </Route>
                            </Switch>
                        </Container>
                    </div>
                    <Footer />
                </Router>
            </div>

        );
    }
}

export default App;

if (document.getElementById("apps")) {
    const Index = ReactDOM.createRoot(document.getElementById("apps"));

    Index.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}
