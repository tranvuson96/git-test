import React from 'react';
import {Card,CardBody,CardText,CardTitle,CardImg} from 'reactstrap';
import dateFormat from 'dateformat';

class Details extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.dish!=null)
        {const comments=this.props.dish.comments.map((comment)=>{
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
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                      <CardTitle>{this.props.dish.name}</CardTitle>
                      <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
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
}

export default Details;