import React from 'react';
import {Col,Row,Container} from 'reactstrap';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';
import dateFormat from 'dateformat';



function Detail(props){

if (props.dish!=null){
        const authorsComments=props.dish.comments.map((userComment)=>{
            return (
                <div key={userComment.id}>
                    <p>--{userComment.author}, {dateFormat(userComment.date,"dd/mm/yyyy")}</p>
                    <p>{userComment.comment}</p>
                </div>
            )
        })
        return (
            <Container>
                <Row sm="2" xs="1">
                    <Col>
                        <Card>
                            <CardImg src={props.dish.image} />
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <h2>Comments</h2>
                        <p>Imagine all the eatables, living in conFusion!</p>
                        {authorsComments}
                    </Col>
                </Row>
            </Container>
        )
    
    }
    else {return(<div></div>)}
}
export default Detail;