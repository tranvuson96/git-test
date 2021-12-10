import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";

export default class DeleteFile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isDeleteModalOpen: false,
		};
		this.toggleDelete = this.toggleDelete.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	toggleDelete() {
		this.setState({ isDeleteModalOpen: !this.state.isDeleteModalOpen });
	}
	handleDelete() {
		this.toggleDelete();
		console.log(this.props.staff);
		this.props.delete(this.props.staff.id);
		alert("Refresh to see the effect");
	}
	render() {
		return (
			<React.Fragment>
				<Button onClick={this.toggleDelete}>
					<span className='fa fa-trash'></span>
				</Button>
				<Modal isOpen={this.state.isDeleteModalOpen} toggle={this.toggleDelete}>
					<ModalHeader>Bạn có chắc muốn sa thải nhân viên này ?</ModalHeader>
					<ModalBody className='d-inline-flex justify-content-between'>
						<Button onClick={this.handleDelete} color='primary'>
							Yes
						</Button>
						<Button onClick={this.toggleDelete} color='danger'>
							No
						</Button>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}
