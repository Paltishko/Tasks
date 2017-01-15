import React, {Component} from "react";
import {FormGroup, FormControl, Button, Navbar} from "react-bootstrap";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchCondition: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({searchCondition: event.target.value});
    }

    handleSubmit() {
        let searchCondition = this.state.searchCondition;
        this.props.performSearch(searchCondition);
    }

    render() {
        return <Navbar.Form pullLeft>
            <FormGroup>
                <FormControl type="text"
                             placeholder="Search"
                             onChange={this.handleChange}
                             value={this.state.searchCondition}/>
            </FormGroup>
            {' '}
            <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
        </Navbar.Form>
            ;
    }

}

export default Search;