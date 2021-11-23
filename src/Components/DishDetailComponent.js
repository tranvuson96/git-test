import React from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import dateFormat from 'dateformat';
import {Link} from 'react-router-dom';


function RenderComments({comments}){
    if(comments!=null){
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment)=>{
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {dateFormat(comment.date,"dd/mm/yyyy")}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    
    
}

function RenderDish(props){
    return (
    <div className="col-12 col-md-5 m-1">
        <Card>
            <CardImg src={props.dish.image} />
            <CardBody>
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
            </CardBody>
        </Card>
    </div>
    )
}

function Detail(props){
    // console.dir(props)
    return (
        
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu' >Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
            </div>    
            <div className="row">

                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.comments}/>
            </div>
        </div>
    )
}


export default Detail;