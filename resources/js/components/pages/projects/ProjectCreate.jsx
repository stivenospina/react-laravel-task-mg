import Axios from "axios";
import React, { Component } from "react";
import { Badge, Form, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../../constant";
import { createProject } from "../../../services/ProjectService";

export default class ProjectCreate extends Component {
    state = {
        isLoading: false,
        name: "",
        description: "",
    };

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.description]: e.target.value,
        });
    }

    submitForm = async (e) => {
        e.preventDefault();
        this.setState({
            isLoading: true,
        });
        const data = {
            name: this.state.name,
            description: this.state.description,
            user_id: 1,
        };
        const response = await createProject(data);
        if (response.success) {
            alert("Project has been created");
        }else{
            alert("Something went wrong");
        }

    };

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
                        <Link to={`${PUBLIC_URL}/projects`} className="btn btn-info">See all projects</Link>
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
                        <Form onSubmit={this.submitForm}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Project Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Project Name" name="name" value={this.state.name} onChange={(e) => this.changeInput(e)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Project Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Project Description" as="textarea" rows="5" name="description" value={this.state.description} onChange={(e) => this.changeInput(e)} />
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
