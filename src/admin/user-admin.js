import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Table } from 'reactstrap';
import axios from 'axios';

const UserAdminForm = () => (
    <div>
        <h1>User Admin</h1>
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Select</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="exampleSelect" />
                    </Col>
                </FormGroup>
                    <FormGroup row>
                    <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
                    <Col sm={10}>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Text Area</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="exampleText" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleFile" sm={2}>File</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </Col>
                </FormGroup>
                <FormGroup tag="fieldset" row>
                <legend className="col-form-label col-sm-2">Radio Buttons</legend>
                <Col sm={10}>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio2" />{' '}
                        Option one is this and that—be sure to include why it's great
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio2" />{' '}
                        Option two can be something else and selecting it will deselect option one
                    </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                    <Label check>
                        <Input type="radio" name="radio2" disabled />{' '}
                        Option three is disabled
                    </Label>
                    </FormGroup>
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="checkbox2" sm={2}>Checkbox</Label>
                <Col sm={{ size: 10 }}>
                    <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="checkbox2" />{' '}
                        Check me out
                    </Label>
                    </FormGroup>
                </Col>
                </FormGroup>
                <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                </Col>
                </FormGroup>
            </Form>
    </div>
)

class UserTable extends Component {
    //get data from db

    constructor() {
        super();
        this.state = {
            allHouses : [],
            isLoading: true
        };
    }
    
    componentDidMount() { 
        console.log(1);
        axios.get('http://localhost:8080/api/house')
        .then(res => {
            console.log(res.data)
            var houses = res.data;
            this.setState({ 
                allHouses: houses
             });
        })

        // fetch(`http://localhost:8080/api/house`)
        //     // We get the API response and receive data in JSON format...
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         this.setState({
        //             allHouses: data,
        //             isLoading: false
        //         })
        //         console.log(this.state.allHouses)
        //     })
        console.log(2);
    }

    handleClick(e) {
        alert ("This is a warning message!"); 
        this.data = "handleclick returned value" 
    }

    //render data in table
    render() {
        function printHouses(allHouses) {
            var i = 0;
            return allHouses.map(house => 
                <tr>
                    <th scope="row">{i++}</th>
                    <td>{house.address}</td>
                    <td>{house.ownerName}</td>
                    <td>{house.builderName}</td>
                </tr>
                );
          }
        return (
            <div>
                <h2>User table</h2>
                <button onClick={this.handleClick}> Refresh </button><br/><br/>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Address</th>
                            <th>Owner</th>
                            <th>Builder</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            printHouses(this.state.allHouses)
                        }
                    </tbody>
                </Table>
                <ul>
                
                </ul>
                
            </div>
        );
    }
}


class UserAdmin extends Component {
    render() {
        return (
            <div>
                <UserAdminForm />
                <UserTable />
                
            </div>
        );
    }
}

export default UserAdmin;