import Axios from "axios";
import React, { Component } from "react";
import { Badge, Form, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../../constant";

export default class ProjectCreate extends Component {
    state = {
        isLoading: false,
    };

    componentDidMount() {

    }

    render() {
        return (
            <>

                <div className="header-part">
                    <div className="float-start">
                        <h2>
                            New Project
                        </h2>
                    </div>
                    <div className="float-end">
                        <a className="btn btn-info">
                            <Link to={`${PUBLIC_URL}/projects`}>See all projects</Link>
                        </a>
                    </div>
                    <div className="clearfix"></div>
                </div>
                {this.state.isLoading && (
                    <div className="text-center mt-5">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )}
                <Card className="my-2">
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Project Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Project Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Project Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Project Description" as="textarea" rows="5" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Save Project
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </>
        );
    }
}
