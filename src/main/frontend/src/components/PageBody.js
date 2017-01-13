import React, {Component} from "react";
import {Grid, Row, Col, Button} from "react-bootstrap";
import CategoryFilterForm from "./CategoryFilterForm";
import TaskItem from "./TaskItem";
import ModalTask from "./ModalTask";


class PageBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            operationModal: ""
        };
        this.openCreateTaskModal = this.openCreateTaskModal.bind(this);
        this.openUpdateTaskModal = this.openUpdateTaskModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openCreateTaskModal() {
        this.setState({
            showModal: true,
            operationModal: "Create new"
        });
    }

    openUpdateTaskModal() {
        this.setState({
            showModal: true,
            operationModal: "Edit"
        });
    }

    closeModal() {
        this.setState({showModal: false});
    }

    render() {
        return <Grid>
            <Row className="show-grid">
                <Col md={3}>
                    <Button bsStyle="success" bsSize="large" block onClick={this.openCreateTaskModal}>
                        Create new task
                    </Button>
                    <ModalTask show={this.state.showModal}
                               onHide={this.closeModal}
                               close={this.closeModal}
                               operation={this.state.operationModal}/>
                    <CategoryFilterForm />
                </Col>
                <Col md={9}>
                    <Grid>
                        {this.props.tasks.map((task, index) =>
                            <TaskItem key={task.id}
                                      task={task}
                                      open={this.openUpdateTaskModal}
                                      onCreateTask={this.props.onCreateTask}
                                      onDeleteTask={this.props.onDeleteTask}
                                      onDeactivateTask={this.props.onDeactivateTask}/>)
                        }
                    </Grid>
                </Col>
            </Row>
        </Grid>;
    }

}

export default PageBody;

