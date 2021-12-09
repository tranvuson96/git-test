import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	Card,
	CardTitle,
	CardText,
} from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading";

function RenderDept({ depts, isLoading, err }) {
	if (isLoading) {
		return (
			<div className='container'>
				<div className='row'>
					<Loading />
				</div>
			</div>
		);
	} else if (err) {
		return (
			<div className='container'>
				<div className='row'>
					<h4>{err}</h4>
				</div>
			</div>
		);
	} else
		return depts.map((dept) => {
			return (
				<div className='col-12 col-md-6 col-lg-4' key={dept.id}>
					<Link to={`/departments/${dept.id}`}>
						<Card>
							<CardTitle>{dept.name}</CardTitle>
							<CardText>Số lượng nhân viên:{dept.numberOfStaff}</CardText>
						</Card>
					</Link>
				</div>
			);
		});
}

function Departments(props) {
	return (
		<div className='container'>
			<div className='row'>
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to='/home'>Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>Departments</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div className='row'>
				<RenderDept
					depts={props.depts}
					isLoading={props.loading}
					err={props.errMess}
				/>
			</div>
		</div>
	);
}

export default Departments;
