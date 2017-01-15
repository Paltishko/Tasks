import React, {Component} from "react";
import {Button, Modal, FieldGroup, FormGroup, ControlLabel, FormControl, Form, Col} from "react-bootstrap";

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
                <Form inline>
                    <FormGroup >
                        <ControlLabel>Task name</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.taskName}
                            placeholder="Enter text"
                            onChange={this.handleTaskNameChange}
                        />
                    </FormGroup>
                    <FormGroup >
                        <ControlLabel>Task description</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            value={this.state.taskDescription}
                            placeholder="Enter text"
                            onChange={this.handleTaskDescriptionChange}
                        />
                    </FormGroup>
                    <FormGroup >
                        <ControlLabel>Category name</ControlLabel>
                        <FormControl componentClass="select"
                                     placeholder={this.state.categoryName}
                                     onChange={this.handleCategoryChange}>
                            <option value="Default">Default</option>
                            <option value="Payments">Payments</option>
                            <option value="Auto">Auto</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup >
                        <ControlLabel>Deadline</ControlLabel>
                        <input className="form-control"
                               type="datetime-local"
                               value={this.state.deadLine}
                               onChange={this.handleDeadLineChange}/>
                    </FormGroup>
                    <FormGroup >
                        <ControlLabel>Image URL</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.imageURL}
                            placeholder="Enter text"
                            onChange={this.handleImageURLChange}
                        />
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