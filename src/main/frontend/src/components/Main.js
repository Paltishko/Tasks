import React, {Component} from "react";
import NavigationBar from "./NavigationBar";
import PageBody from "./PageBody";
import InitialData from "./InitialData";
import ModalTask from "./ModalTask";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: InitialData,
            showModalTask: false,
            operationModal: ""
        };
        this.onCreateTask = this.onCreateTask.bind(this);
        this.onDeleteTask = this.onDeleteTask.bind(this);
        this.onDeactivateTask = this.onDeactivateTask.bind(this);
        this.openCreateTaskModal = this.openCreateTaskModal.bind(this);
        this.openUpdateTaskModal = this.openUpdateTaskModal.bind(this);
        this.closeModalTask = this.closeModalTask.bind(this);

    }

    onCreateTask() {

    }

    onDeleteTask() {

    }

    onDeactivateTask() {

    }

    openCreateTaskModal() {
        this.setState({
            showModalTask: true,
            operationModal: "Create new"
        });
    }

    openUpdateTaskModal() {
        this.setState({
            showModalTask: true,
            operationModal: "Edit"
        });
    }

    closeModalTask() {
        this.setState({showModalTask: false});
    }

    render() {
        return <div>
            <NavigationBar />
            <PageBody tasks={this.state.tasks}
                      onDeleteTask={this.onDeleteTask}
                      onDeactivateTask={this.onDeactivateTask}
                      openCreateTaskModal={this.openCreateTaskModal}
                      openUpdateTaskModal={this.openUpdateTaskModal}
            />
            <ModalTask show={this.state.showModalTask}
                       closeModalTask={this.closeModalTask}
                       operation={this.state.operationModal}
                       onCreateTask={this.onCreateTask}/>
        </div>;
    }
}

export default Main;