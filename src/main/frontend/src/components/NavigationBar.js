import React, {Component} from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import Search from "./Search";

class NavigationBar extends React.Component {

    render() {
        return <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Tasks controller</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">Active tasks</NavItem>
                    <NavItem eventKey={2} href="#">Overdued</NavItem>
                    <NavItem eventKey={3} href="#">All</NavItem>
                    <NavItem eventKey={4} href="#">Completed</NavItem>
                </Nav>
                <Nav pullRight>
                    <Search />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }

}

export default NavigationBar;