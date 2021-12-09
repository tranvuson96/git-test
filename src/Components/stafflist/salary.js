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
import Loading from "../Loading";

function StaffsSalary({ staffs, err, isLoading }) {
	if (isLoading) {
		return <Loading />;
	} else if (err) {
		return <h4>{err}</h4>;
	} else {
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
								{staff.salary}
							</CardText>
						</CardBody>
					</Card>
				</div>
			);
		});
	}
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
				<StaffsSalary
					staffs={props.staffs}
					err={props.errMess}
					isLoading={props.loading}
				/>
			</div>
		</div>
	);
}

export default Salary;
