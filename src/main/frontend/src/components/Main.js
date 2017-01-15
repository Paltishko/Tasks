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

    updateTasks() {
        $.get("/api/tasks", (data) => {
            this.setState({tasks: data})
        });
    }

    onCreateTask(taskName, taskDescription, categoryName, deadLine, imageURL) {
        let Task = {
            id: null,
            taskName: taskName,
            taskDescription: taskDescription,
            imageURL: imageURL,
            dateAdded: null,
            dateFinished: null,
            deadLine: deadLine,
            category: {id: null, categoryName: categoryName},
            active: true
        };

        console.log('A name was submitted: ' + taskName);
        console.log('A description was submitted: ' + taskDescription);
        console.log('A category was submitted: ' + categoryName);
        console.log('A deadLine was submitted: ' + deadLine);
        console.log('A deadLine was submitted: ' + imageURL);
        console.log('A deadLine was submitted: ' + Task);


        $.ajax({
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "/api/tasks",
            data: JSON.stringify({
                id: null,
                taskName: taskName,
                taskDescription: taskDescription,
                imageURL: imageURL,
                dateAdded: null,
                dateFinished: null,
                deadLine: deadLine,
                category: {id: null, categoryName: categoryName},
                active: true
            }),
            success: () => this.updateTasks(),
            error: () => this.updateTasks()
        });

    }

    onDeleteTask(id) {
        $.post("/api/tasks/" + id + "/delete/", null, () => this.updateTasks());
    }

    onDeactivateTask(id) {

    }

    openCreateTaskModal() {
        this.setState({
            showModalTask: true,
            operationModal: "Create new"
        });
    }

    openUpdateTaskModal(task) {
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