import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import request from 'superagent'

export default class AddRestaurant extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            lat:0,
            lng:0,
            point:5,
            content:'',
            password:'',
        };
    }

    handleChange=(e)=>{
        const name = e.target.name;
        this.setState({[name]: e.target.value});
    }

    handleSubmit=()=>{
        request
            .post('http://localhost:3001/posts/add')
            .send(this.state)
            .end((err,res)=>{
                if(err) console.log(err);
                console.log(res);
            })
    }


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label for="name" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="name" id="name" placeholder="Insert Restaurant Name .."
                        value={this.state.value} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="lat" sm={2}>Position</Label>
                    <Col sm={10}>
                        <Input type="text" name="lat" id="lat" placeholder="Insert lat .."
                               value={this.state.value} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="lng" sm={2}>Position</Label>
                    <Col sm={10}>
                        <Input type="text" name="lng" id="lng" placeholder="Insert lng .."
                               value={this.state.value} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="points" sm={2}>Point</Label>
                    <Col sm={10}>
                        <Input type="select" name="point" id="point"
                               value={this.state.value} onChange={this.handleChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="content" sm={2}>Content</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="content" id="content"
                               value={this.state.value} onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Insert Password .."
                           value={this.state.value} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button> Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}
