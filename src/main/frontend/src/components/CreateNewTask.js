import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class CreateNewTaks extends React.Component {
    constructor(){
        super();
    }

    render() {
        return       <Button bsStyle="success" bsSize="large" block>Create new task</Button>;
    }

}

export default CreateNewTaks;