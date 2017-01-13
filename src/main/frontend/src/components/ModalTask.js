import React, {Component} from "react";
import {Button, Modal, FieldGroup, FormGroup, ControlLabel, FormControl, Form, Col} from "react-bootstrap";

class ModalTask extends React.Component {

    constructor(props) {
        super(props);
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
                    <FormGroup>
                        <Col md={4}>
                            <ControlLabel>
                                Task name
                            </ControlLabel>
                        </Col>
                        <Col md={8}>
                            <FormControl type="text" placeholder=""/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={4}>
                            <ControlLabel>
                                Description
                            </ControlLabel>
                        </Col>
                        <Col md={8}>
                            <FormControl componentClass="textarea" placeholder="textarea"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={4}>
                            <ControlLabel>
                                Category
                            </ControlLabel>
                        </Col>
                        <Col md={8}>
                            <FormControl componentClass="select" placeholder="Select category">
                                <option value="payments">Payments</option>
                                <option value="auto">Auto</option>
                            </FormControl>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={4}>
                            <ControlLabel>
                                Target date
                            </ControlLabel>
                        </Col>
                        <Col md={8}>
                            <input className="form-control" type="datetime-local" name="bdaytime"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={4}>
                            <ControlLabel>
                                Link to image
                            </ControlLabel>
                        </Col>
                        <Col md={8}>
                            <FormControl type="text" placeholder=""/>
                        </Col>
                    </FormGroup>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.closeModalTask}>Close</Button>
                <Button onClick={this.props.onCreateTask} bsStyle="success">Save changes</Button>
            </Modal.Footer>
        </Modal>
    }

}

export default ModalTask;