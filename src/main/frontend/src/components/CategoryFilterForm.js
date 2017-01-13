import React, {Component} from "react";
import {Form, Checkbox, Button, Badge} from "react-bootstrap";

class CategoryFilterForm extends React.Component {

    render() {
        return <Form>
            <h3>Category filter:</h3>
            <Checkbox readOnly>
                Category <Badge>42</Badge>
            </Checkbox>
            <Checkbox readOnly>
                Category
            </Checkbox>
            <Checkbox readOnly>
                Category
            </Checkbox >
            <Button type="reset">
                Disable filters
            </Button>
        </Form>;
    }

}

export default CategoryFilterForm;