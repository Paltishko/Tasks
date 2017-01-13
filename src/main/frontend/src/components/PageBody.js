import React, {Component} from "react";
import {Grid, Row, Col, Button} from "react-bootstrap";
import CategoryFilterForm from "./CategoryFilterForm";
import TaskItem from "./TaskItem";
import ModalTask from "./ModalTask";


class PageBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Grid>
            <Row className="show-grid">
                <Col md={3}>
                    <Button bsStyle="success" bsSize="large" block onClick={this.props.openCreateTaskModal}>
                        Create new task
                    </Button>
                    <CategoryFilterForm />
                </Col>
                <Col md={9}>
                    <Grid>
                        {this.props.tasks.map((task, index) =>
                            <TaskItem key={task.id}
                                      task={task}
                                      openUpdateTaskModal={this.props.openUpdateTaskModal}
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

