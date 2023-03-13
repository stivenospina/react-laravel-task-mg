import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <nav>
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
                        </nav>

                        {/* A <Switch> looks through its children <Route>s and
                            renders the first one that matches the current URL. */}
                        <Routes>
                            <Route path="/about" element={<About />}>
                            </Route>
                            <Route path="/users" element={<Users />}>
                            </Route>
                            <Route path="/" element={<Home />}>
                            </Route>
                        </Routes>
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
