import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Content extends React.Component {
    constructor(){
        super();
    }

    render() {
        return       <Grid>
                         <Row className="show-grid">
                           <Col md={2}><img width={150} height={150} src="/avatar-face-icon.png" alt="Image"/></Col>
                           <Col md={7}>Details</Col>
                         </Row>
                         <Row className="show-grid">
                                                    <Col md={2}><img width={150} height={150} src="/avatar-face-icon.png" alt="Image"/></Col>
                                                    <Col md={7}>Details</Col>
                                                  </Row>
                      </Grid>;
    }

}

export default Content;