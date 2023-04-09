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
        name: "",
        description: "",
    };

    componentDidMount() {

    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.description]: e.target.value,
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        const postBody = {
            name: this.state.name,
            description: this.state.description,
            user_id: 1,
        }
        Axios.post("http://localhost:8000/api/projects", postBody).then((res) => {
            if(res.data.success == true) {
                alert(res.data.message);
            }
            else if (res.data.success == false) {
                alert(res.data.message);
            }
        });
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
                        <Form onSubmit={this.submitForm}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Project Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Project Name" value={this.state.name} name="name" onChange={(e) => this.changeInput(e)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Project Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Project Description" as="textarea" rows="5" value={this.state.description} name="description" onChange={(e) => this.changeInput(e)} />
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
