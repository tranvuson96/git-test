import React from "react";
import {
	Card,
	CardBody,
	CardText,
	CardTitle,
	CardImg,
	BreadcrumbItem,
	Breadcrumb,
	Modal,
	ModalBody,
	ModalHeader,
	Row,
	Label,
	Button,
} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const min = (min) => (val) => !val || val >= min;
const max = (max) => (val) => val && val <= max;
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

class Details extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
		};
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	toggleModal() {
		this.setState({ isModalOpen: !this.state.isModalOpen });
	}
	handleSubmit(values) {
		this.toggleModal();
		this.props.addComment(
			this.props.dish.id,
			values.rating,
			values.author,
			values.comment,
		);
	}
	render() {
		if (this.props.dish != null) {
			return (
				<div className='container'>
					<div className='row'>
						<Breadcrumb>
							<BreadcrumbItem>
								<Link to='/menu'>Menu</Link>
							</BreadcrumbItem>
							<BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
						</Breadcrumb>
						<div className='col-12'>
							<h3>{this.props.dish.name}</h3>
							<hr />
						</div>
					</div>
					<div className='row'>
						<div className='col-12 col-md-5 m-1'>
							<RenderDish dish={this.props.dish} />
						</div>
						<div className='col-12 col-md-5 m-1'>
							<RenderComments comments={this.props.comments} />
							<Button outline onClick={this.toggleModal}>
								<span className='fa fa-edit fa-lg'></span> SubmitComment
							</Button>
						</div>
					</div>
					<div>
						<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
							<ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
							<ModalBody>
								<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
									<Row className='form-group'>
										<Label htmlFor='rate'>Rating</Label>
										<Control.text
											model='.rate'
											id='rate'
											name='rate'
											validators={{
												required,
												isNumber,
												min: min(0),
												max: max(5),
											}}
										/>
										<Errors
											model='.rate'
											className='text-danger'
											show='touched'
											messages={{
												required: "Required",
												isNumber: "Must be a number",
												min: ">=0",
												max: "<=5",
											}}
										/>
									</Row>
									<Row className='form-group'>
										<Label htmlFor='author'>Your Name</Label>
										<Control.text
											model='.author'
											id='author'
											name='author'
											validators={{
												required,
												minLength: minLength(3),
												maxLength: maxLength(15),
											}}
										/>
										<Errors
											className='text-danger'
											model='.author'
											show='touched'
											messages={{
												required: "Required",
												minLength: "Must be greater than 2 characters",
												maxLength: "Must be 15 characters or less",
											}}
										/>
									</Row>
									<Row className='form-group'>
										<Label htmlFor='comment'>Comment</Label>
										<Control.textarea
											model='.comment'
											id='comment'
											name='comment'
											validators={{ maxLength: maxLength(300) }}
										/>
										<Errors
											className='text-danger'
											model='.comment'
											show='touched'
											messages={{
												maxLength: "Must be 300 charaters or less",
											}}
										/>
									</Row>
									<Row className='form-group'>
										<Button type='submit' value='submit' color='primary'>
											Submit
										</Button>
									</Row>
								</LocalForm>
							</ModalBody>
						</Modal>
					</div>
				</div>
			);
		} else {
			return <div></div>;
		}
	}
}

export default Details;
