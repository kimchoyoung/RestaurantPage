import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap'

import RestaurantMap from '../component/RestaurantMap'
import RestaurantInfo from '../component/RestaurantInfo'
import AddRestaurant from '../component/AddRestaurant'

import request from "superagent";

class Main extends Component {
    state = {
        add_mode: false,
        posts: [],
    }

    componentDidMount(){
        request
            .get('http://localhost:3001/posts/find')
            .end((err,res)=>{
                if(err) console.log(err);

                this.setState({
                    posts: JSON.parse(res.text),
                })
                console.log(this.state.posts)
            })
    }
    setAddMode=()=>{
        this.setState({
            add_mode: true,
        })
    }
    setFindMode=()=>{
        this.setState({
            add_mode: false,
        })
    }
    render() {
        console.log(typeof(this.state.posts));

        return (
            <Container fluid={true}>
                <Row noGutters={true}>
                    <Col xs="8" >
                            <RestaurantMap info={this.state.posts}/>
                    </Col>
                    <Col>
                        <Container>
                            <Row>
                                <Col style={{backgroundColor:'black', width:'100%', height:'40px', }}>
                                    <button onClick={this.setAddMode}>ADD</button>
                                    <button onClick={this.setFindMode}>FIND</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {
                                        this.state.add_mode? <AddRestaurant/>:
                                            this.state.posts.map((value, idx) => {
                                            return (
                                                <RestaurantInfo posts={value} key={idx}/>
                                            )
                                        })
                                    }
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;
