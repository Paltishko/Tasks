import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import PageBody from './PageBody';
//import {Route, Router, browserHistory} from 'react-router';

class Main extends React.Component {
    constructor(){
        super();
    }

    render() {
        return <div>
            <NavigationBar />
            <PageBody/>
        </div>;
    }

}

export default Main;