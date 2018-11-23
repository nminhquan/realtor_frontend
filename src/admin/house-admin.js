import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

class HouseAdmin extends Component {
    render() {
        return (
            <div>
                <h1>House Admin</h1>
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );

    }
}

export default HouseAdmin;