import Axios from "axios";
import React, { Component } from "react";
import { Badge, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../../constant";

export default class ProjectList extends Component {
    state = {
        projectList: [],
        isLoading: false,
    };

    componentDidMount() {
        this.getProjectList();
    }

    getProjectList = () => {
        this.setState({ isLoading: true });
        // call api project list data from axios
        Axios.get("http://localhost:8000/api/projects").then((res) => {
            const projectList = res.data.data;
            this.setState({
                projectList,
                isLoading: false,
            });
        });
    };

    render() {
        return (
            <>
                <div className="header-part">
                    <div className="float-start">
                        <h2>
                            Project List{" "}
                            <Badge variant="primary">
                                {this.state.projectList.length}
                            </Badge>
                        </h2>
                    </div>
                    <div className="float-end">
                        <Link to={`${PUBLIC_URL}/project/create`} className="btn btn-info">Create</Link>
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
                {this.state.projectList.map((project, index) => (
                    <Card className="my-2" key={index}>
                        <Card.Header>
                            {project.name}{" "}
                            <Badge variant="primary">
                                {project.tasks_count}
                            </Badge>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{project.description}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <Button variant="primary" className="mx-1">
                                View
                            </Button>
                            <Button variant="success" className="mx-1">
                                Edit
                            </Button>
                            <Button variant="danger" className="mx-1">
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </>
        );
    }
}
