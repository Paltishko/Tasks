import React, {Component} from "react";
import {Thumbnail, Button} from "react-bootstrap";

class UserInfo extends React.Component {

    render() {
        return <Thumbnail src="/avatar-face-icon.png" alt="Img not found">
            <h3>Anton Tretiak</h3>
            <p>
                <Button bsStyle="primary">Logout</Button>;
            </p>
        </Thumbnail>
    }
}

export default UserInfo;