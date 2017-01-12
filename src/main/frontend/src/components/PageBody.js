import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import CreateNewTask from './CreateNewTask';
import CategoryFilterForm from './CategoryFilterForm';
import Content from './Content';


class PageBody extends React.Component {
    constructor(){
        super();
    }

    render() {
        return       <Grid>
                         <Row className="show-grid">
                           <Col md={3}>
                             <CreateNewTask />
                             <CategoryFilterForm />
                           </Col>
                           <Col md={9}>
                             <Content />
                           </Col>
                         </Row>
                     </Grid>;
    }

}

export default PageBody;