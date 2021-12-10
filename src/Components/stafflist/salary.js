import React from "react";
import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	BreadcrumbItem,
	Breadcrumb,
} from "reactstrap";
import { Link } from "react-router-dom";

function StaffsSalary({ staffs }) {
	let x = 20000;
	return staffs.map((staff) => {
		return (
			<div className='col-12 col-md-6 col-lg-4' key={staff.id}>
				<Card>
					<CardBody>
						<CardTitle>{staff.name}</CardTitle>
						<CardText>Staff's id:{staff.id}</CardText>
						<CardText>Salary Scale:{staff.salaryScale}</CardText>
						<CardText>Over Time:{staff.overTime}</CardText>
						<CardText>
							Salary:
							{x * 8 * 24 * staff.salaryScale + 1.25 * x * staff.overTime}
						</CardText>
					</CardBody>
				</Card>
			</div>
		);
	});
}

function Salary(props) {
	return (
		<div className='container'>
			<div className='row'>
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to='/home'>Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>Salary</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div className='row'>
				<StaffsSalary staffs={props.staffs} />
			</div>
		</div>
	);
}

export default Salary;
