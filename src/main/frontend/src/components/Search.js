import React, { Component } from 'react';
import {FormGroup, FormControl, Button, Navbar} from 'react-bootstrap';

class Search extends React.Component {
    constructor(){
        super();
    }

    render() {
        return       <Navbar.Form pullLeft>
                       <FormGroup>
                         <FormControl type="text" placeholder="Search" />
                       </FormGroup>
                       {' '}
                       <Button type="submit">Submit</Button>
                     </Navbar.Form>
                     ;
    }

}

export default Search;