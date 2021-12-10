import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import React from "react";

function RenderList({ staffs }) {
	return staffs.map((staff) => {
		return (
			<div className='col-6 col-md-4 col-lg-2' key={staff.id}>
				<Card>
					<Link to={`/staffs/${staff.id}`}>
						<CardImg src={staff.image} alt={staff.name} />
						<CardBody>
							<CardTitle>{staff.name}</CardTitle>
						</CardBody>
					</Link>
				</Card>
			</div>
		);
	});
}

function StaffList(props) {
	return (
		<div className='container'>
			<div className='row'>
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to='/home'>Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>Nhân viên</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div className='row'>
				<RenderList staffs={props.staffs} />
			</div>
		</div>
	);
}

export default StaffList;
