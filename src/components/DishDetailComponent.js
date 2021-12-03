import React from "react";
import {
	Card,
	CardBody,
	CardText,
	CardTitle,
	CardImg,
	BreadcrumbItem,
	Breadcrumb,
} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

function RenderComments({ comments }) {
	if (comments != null) {
		const comment = comments.map((comment) => {
			return (
				<div key={comment.id}>
					<p>
						-- {comment.author}, {dateFormat(comment.date, "dd/mm/yyyy")}
					</p>
					<p>{comment.comment}</p>
				</div>
			);
		});

		return (
			<Card>
				<CardTitle>Comments</CardTitle>
				<p>Imagine all the eatables,living in conFusion</p>
				{comment}
			</Card>
		);
	} else {
		return <div></div>;
	}
}

function RenderDish({ dish }) {
	return (
		<Card>
			<CardImg width='100%' src={dish.image} alt={dish.name} />
			<CardBody>
				<CardTitle>{dish.name}</CardTitle>
				<CardText>{dish.description}</CardText>
			</CardBody>
		</Card>
	);
}

function Details(props) {
	if (props.dish != null) {
		return (
			<div className='container'>
				<div className='row'>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to='/menu'>Menu</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className='col-12'>
						<h3>{props.dish.name}</h3>
						<hr />
					</div>
				</div>
				<div className='row'>
					<div className='col-12 col-md-5 m-1'>
						<RenderDish dish={props.dish} />
					</div>
					<div className='col-12 col-md-5 m-1'>
						<RenderComments comments={props.comments} />
					</div>
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
}

export default Details;
