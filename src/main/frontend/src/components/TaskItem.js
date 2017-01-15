import React, {Component} from "react";
import {Row, Col, Image, Panel, ButtonGroup, Button} from "react-bootstrap";

class TaskItem extends React.Component {

    constructor (props){
        super(props);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    }

    handleDeleteButtonClick (){
        this.props.onDeleteTask(this.props.task.id);
    }

    render() {
        return <Row className="show-grid">
            <Col md={2}>
                <Image src={this.props.task.imageURL}
                       rounded
                       responsive/>
            </Col>
            <Col md={7}>
                <Panel>
                    <Row className="show-grid">
                        <Col md={5}>
                            <h4>{this.props.task.taskName}</h4>
                        </Col>
                        <Col md={2} mdPush={5}>
                            Deadline {this.props.task.deadLine}
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={7}>
                            {this.props.task.taskDescription}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            Task added: {this.props.task.dateAdded}
                        </Col>
                        <Col md={6} mdPush={3}>
                            <ButtonGroup justified>
                                <ButtonGroup><Button onClick={this.props.onDeactivateTask(this.props.task.id)}
                                                     bsStyle="success">
                                    Done</Button></ButtonGroup>
                                <ButtonGroup><Button onClick={this.props.openUpdateTaskModal}>
                                    Edit</Button></ButtonGroup>
                                <ButtonGroup><Button onClick={this.handleDeleteButtonClick}>
                                    Delete</Button></ButtonGroup>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Panel>
            </Col>
        </Row>;
    }
}

export default TaskItem;