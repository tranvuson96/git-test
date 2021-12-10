import React, { Component } from "react";
import Loading from "../Loading";
import { Card, CardImg, CardBody, CardTitle, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";
import EditFile from "./EditFile";
import DeleteFile from "./DeleteFile";

class RenderList extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		if (this.props.isLoading) {
			return (
				<div className='container'>
					<div className='row'>
						<Loading />
					</div>
				</div>
			);
		} else if (this.props.err) {
			return (
				<div className='container'>
					<div className='row'>
						<h4>{this.props.err}</h4>
					</div>
				</div>
			);
		} else
			return this.props.staffs.map((staff) => {
				return (
					<div className='col-6 col-md-4 col-lg-2' key={staff.id}>
						<Card>
							<Link to={`/staffs/${staff.id}`}>
								<CardImg src={staff.image} alt={staff.name} />
								<CardBody>
									<CardTitle>{staff.name}</CardTitle>
								</CardBody>
							</Link>
							<CardFooter className='d-inline-flex justify-content-between'>
								<EditFile
									staff={staff}
									edit={this.props.patchEdit}
									depts={this.props.depts}
								/>
								<DeleteFile staff={staff} delete={this.props.deleteStaff} />
							</CardFooter>
						</Card>
					</div>
				);
			});
	}
}

export default RenderList;
