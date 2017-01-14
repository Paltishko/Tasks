import React, {Component} from "react";
import $ from "jquery";
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
        this.updateTasks = this.updateTasks.bind(this);
        this.onCreateTask = this.onCreateTask.bind(this);
        this.onDeleteTask = this.onDeleteTask.bind(this);
        this.onDeactivateTask = this.onDeactivateTask.bind(this);
        this.openCreateTaskModal = this.openCreateTaskModal.bind(this);
        this.openUpdateTaskModal = this.openUpdateTaskModal.bind(this);
        this.closeModalTask = this.closeModalTask.bind(this);

    }

    componentDidMount() {
        this.updateTasks();
    }

    updateTasks() {
        $.get("/api/tasks", (data) => {
            this.setState({tasks: data})
        });
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