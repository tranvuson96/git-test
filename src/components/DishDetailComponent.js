import React from 'react';
import {Card,CardBody,CardText,CardTitle,CardImg} from 'reactstrap';
import dateFormat from 'dateformat';

function Details(props){
        if(props.dish!=null)
        {const comments=props.dish.comments.map((comment)=>{
            return (
                    <div key={comment.id}>
                        <p>-- {comment.author}, {dateFormat(comment.date,"dd/mm/yyyy")}</p>
                        <p>{comment.comment}</p>
                    </div>
            )
        })
        return (
            <div className="container">
            <div className="row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={props.dish.image} alt={props.dish.name} />
                    <CardBody>
                      <CardTitle>{props.dish.name}</CardTitle>
                      <CardText>{props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardBody>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>Imagine all the eatables,living in conFusion!</CardText>
                    {comments}
                </CardBody>
            </Card>
            </div>
        </div>
        </div>
        )}
        else {return (<div></div>)}
    
}

export default Details;