import React,{Component} from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';
import dateFormat from 'dateformat';

class Detail extends Component{
    constructor(props){
        super(props);

        
    }

    render(){
        const authorComments=this.props.comments.map((coment)=>{
            return (
                <div key={coment.id}>
                    <p>--{coment.author} {dateFormat(coment.date,"dd/mm/yyyy")}</p>
                    <p>{coment.comment}</p>
                </div>
            )
        })
        return (
            <Container>
                <Row sm="2" xs="1">
                    <Col>
                        <Card>
                            <CardImg src={this.props.image} />
                            <CardBody>
                                <CardTitle>{this.props.name}</CardTitle>
                                <CardText>{this.props.info}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <h2>Comments</h2>
                        <p>Imagine all the eatables, living in conFusion!</p>
                        {authorComments}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Detail;