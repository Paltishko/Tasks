import React, {Component} from "react";
import {Button, Modal, FieldGroup, FormGroup, ControlLabel, FormControl, Form, Col, Row} from "react-bootstrap";

class ModalTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskName: "",
            taskDescription: "",
            categoryName: "Default",
            deadLine: "2017-01-20T11:11",
            imageURL: "",
        };
        this.handleTaskNameChange = this.handleTaskNameChange.bind(this);
        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleDeadLineChange = this.handleDeadLineChange.bind(this);
        this.handleImageURLChange = this.handleImageURLChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    handleTaskNameChange(event) {
        this.setState({
            taskName: event.target.value
        });
    }

    handleTaskDescriptionChange(event) {
        this.setState({
            taskDescription: event.target.value
        });
    }

    handleCategoryChange(event) {
        this.setState({
            categoryName: event.target.value
        });
    }

    handleDeadLineChange(event) {
        this.setState({
            deadLine: event.target.value
        });
    }

    handleImageURLChange(event) {
        this.setState({
            imageURL: event.target.value
        });
    }

    onSubmit() {
        let taskName = this.state.taskName;
        let taskDescription = this.state.taskDescription;
        let categoryName = this.state.categoryName;
        let deadLine = this.state.deadLine;
        let imageURL = this.state.imageURL;
        this.props.onCreateTask(taskName, taskDescription, categoryName, deadLine, imageURL);
    }

    render() {
        const operation = this.props.operation;

        return <Modal show={this.props.show}
                      onHide={this.props.closeModalTask}>
            <Modal.Header closeButton>
                <Modal.Title>{operation} task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form horizontal>
                    <FormGroup >
                        <Col md={4}>
                            <ControlLabel>Task name</ControlLabel>
                        </Col>
                        <Col md={8}>
                            <FormControl
                                type="text"
                                value={this.state.taskName}
                                placeholder="Enter text"
                                onChange={this.handleTaskNameChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup >
                        <Col md={4}>
                            <ControlLabel>Task description</ControlLabel>
                        </Col>
                        <Col md={8}>
                            <FormControl
                                componentClass="textarea"
                                value={this.state.taskDescription}
                                placeholder="Enter text"
                                onChange={this.handleTaskDescriptionChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup >
                        <Col md={4}>
                            <ControlLabel>Category name</ControlLabel>
                        </Col>
                        <Col md={8}>
                            <FormControl componentClass="select"
                                         placeholder={this.state.categoryName}
                                         onChange={this.handleCategoryChange}>
                                <option value="Default">Default</option>
                                <option value="Payments">Payments</option>
                                <option value="Auto">Auto</option>
                            </FormControl>
                        </Col>
                    </FormGroup>
                    <FormGroup >
                        <Col md={4}>
                            <ControlLabel>Deadline</ControlLabel>
                        </Col>
                        <Col md={8}>
                            <input className="form-control"
                                   type="datetime-local"
                                   value={this.state.deadLine}
                                   onChange={this.handleDeadLineChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup >
                        <Col md={4}>
                            <ControlLabel>Image URL</ControlLabel>
                        </Col>
                        <Col md={8}>
                            <FormControl
                                type="text"
                                value={this.state.imageURL}
                                placeholder="Enter text"
                                onChange={this.handleImageURLChange}
                            />
                        </Col>
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.closeModalTask}>Close</Button>
                <Button onClick={this.onSubmit} bsStyle="success">Save changes</Button>
            </Modal.Footer>
        </Modal>
    }

}

export default ModalTask;