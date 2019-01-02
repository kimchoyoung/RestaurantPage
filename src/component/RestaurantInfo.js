import React from 'react';
import { Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';
import request from 'superagent'
import {FaRegLaughBeam, FaRegLaugh, FaRegMeh} from 'react-icons/fa'


let research_engine = "https://search.naver.com/search.naver?query="


class RestaurantInfo extends React.Component{
    onClick=(e)=>{
        console.log(e.target.id)

        request
            .get('http://localhost:3001/posts/delete')
            .query({'id':e.target.id})
            .end((err)=>{
                if(err) console.log(err);
            });

        window.location.reload()
    }

    render(){
        let icons;
        switch (this.props.posts.point){
            case 1: default: icons = <FaRegMeh/>; break;
            case 2: icons = <FaRegLaugh/>; break;
            case 3: icons = <FaRegLaughBeam/>; break;
        }

        return (
            <div style={{ width: '80%', margin:'30px auto', }}>
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.posts.name}</CardTitle>
                        <CardSubtitle>{this.props.posts.lat+","+this.props.posts.lng}e</CardSubtitle>
                    </CardBody>
                    <CardBody>
                        <CardText>{icons}</CardText>
                        <CardText>{this.props.posts.content}</CardText>
                        <CardLink href={research_engine+this.props.posts.name}> Link </CardLink>
                        <CardLink href="#">Edit</CardLink>
                        <CardLink onClick={this.onClick} id={this.props.posts.id}>Delete</CardLink>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default RestaurantInfo;

// 같은 데이터를 쓰는 2개의 component.
// 데이터 요청을 2번하는가? 하나의 데이터로 둘이 주고 받는가?
// 둘이 주고 받는가? 부모로 부터 가져오는가?
// 부모는 컨테이넌데..
