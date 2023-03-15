import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';



class App extends Component {
    state = {
        PUBLIC_URL: "/home",
    }
    render() {
        return (
            <div>
                <Router>
                    <div id="header"></div>
                    <div>
                        <Container>
                            {/* A <Switch> looks through its children <Route>s and
                            renders the first one that matches the current URL. */}
                            <Routes>
                                <Route path={`${this.state.PUBLIC_URL}`} >
                                    <Home />
                                </Route>
                                <Route path={`${this.state.PUBLIC_URL}/about`} >
                                    <About />
                                </Route>
                                <Route path={`${this.state.PUBLIC_URL}/contact`} >
                                    <Contact />
                                </Route>
                            </Routes>
                            <div id="footer"></div>
                        </Container>
                    </div>
                </Router>
            </div>

        );
    }
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
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
