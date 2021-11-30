import React from 'react';
import {Card,CardBody,CardText,CardTitle} from 'reactstrap';
import dateFormat from 'dateformat';

class Details extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const comments=this.props.dish.comments.map((comment)=>{
            return (
                <div key={comment.id}>
                    <p>-- {comment.author}, {dateFormat(comment.date,"dd/mm/yyyy")}</p>
                    <br/>
                    <p>{comment.comment}</p>
                </div>
            )
        })
        return (
            <Card>
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>Imagine all the eatables,living in conFusion!</CardText>
                    {comments}
                </CardBody>
            </Card>
        )
    }

}

export default Details;