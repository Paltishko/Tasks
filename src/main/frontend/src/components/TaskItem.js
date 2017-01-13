import React, { Component } from 'react';
import {Row, Col, Image, Panel, ButtonGroup, Button} from 'react-bootstrap';

class TaskItem extends React.Component {

    render() {
        return           <Row className="show-grid">
                           <Col md={2}><Image src="/bmw.jpg" rounded responsive /></Col>
                           <Col md={7}>
                               <Panel>
                                    <Row className="show-grid">
                                       <Col md={5}>
                                         Title
                                       </Col>
                                       <Col md={2} mdPush={5}>
                                         DeadLine
                                       </Col>
                                    </Row>
                                    <Row className="show-grid">
                                      <Col md={7}>
                                        Description
                                      </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}>
                                            Created DateTime
                                        </Col>
                                        <Col md={6} mdPush={3}>
                                            <ButtonGroup justified>
                                                <ButtonGroup><Button bsStyle="success">Done</Button></ButtonGroup>
                                                <ButtonGroup><Button onClick={this.props.open}>Edit</Button></ButtonGroup>
                                                <ButtonGroup><Button >Delete</Button></ButtonGroup>
                                            </ButtonGroup>
                                        </Col>
                                    </Row>
                               </Panel>
                           </Col>
                         </Row>;
    }

}

export default TaskItem;