import React, {Component} from "react";
import NavigationBar from "./NavigationBar";
import PageBody from "./PageBody";
import InitialData from "./InitialData";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tasks: InitialData};
        this.onCreateTask = this.onCreateTask.bind(this);
        this.onDeleteTask = this.onDeleteTask.bind(this);
        this.onDeactivateTask = this.onDeactivateTask.bind(this);
    }

    onCreateTask() {

    }

    onDeleteTask() {

    }

    onDeactivateTask() {

    }

    render() {
        return <div>
            <NavigationBar />
            <PageBody tasks={this.state.tasks}
                      onCreateTask={this.onCreateTask}
                      onDeleteTask={this.onDeleteTask}
                      onDeactivateTask={this.onDeactivateTask}/>
        </div>;
    }
}

export default Main;