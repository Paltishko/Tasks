import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import CategoryFilterForm from './CategoryFilterForm';
import TaskItem from './TaskItem';
import ModalTask from './ModalTask';


class PageBody extends React.Component {
    constructor(props){
        super(props);
        this.state = {  showModal: false,
                        operationModal: ""
                        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    open() {
        this.setState({ showModal: true});
    }
    close() {
        this.setState({showModal: false});
    }

    render() {
        const oper = "";
        return       <Grid>
                         <Row className="show-grid">
                           <Col md={3}>
                             <Button bsStyle="success" bsSize="large" block onClick={this.open}>
                                Create new task
                             </Button>
                             <ModalTask show={this.state.showModal} onHide={this.close} close={this.close} operation = {this.state.operationModal}/>
                             <CategoryFilterForm />
                           </Col>
                           <Col md={9}>
                             <Grid>
                                <TaskItem open={this.open} />
                             </Grid>
                           </Col>
                         </Row>
                     </Grid>;
    }

}

export default PageBody;

