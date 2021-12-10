import React from "react";
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const RenderDetail = (props) => {
	console.log(props.staff);
	if (props != null) {
		return (
			<Card>
				<CardBody>
					<CardTitle>Họ và tên:{props.staff.name}</CardTitle>
					<p>Ngày vào công ty:{props.staff.startDate}</p>
					<p>Ngày sinh:{props.staff.doB}</p>
					<p>Phòng ban:{props.staff.department.name}</p>
					<p>Số ngày nghỉ còn lại:{props.staff.annualLeave}</p>
					<p>Số ngày đã làm thêm:{props.staff.overTime}</p>
				</CardBody>
			</Card>
		);
	} else {
		return <div></div>;
	}
};

function StaffDetail(props) {
	return (
		<div className='container'>
			<div className='row'>
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to='/home'>Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div className='row'>
				<div className='col-12 col-md-4 col-lg-3'>
					<CardImg src={props.staff.image} alt={props.staff.name} />
				</div>
				<div className='col-12 col-md-8 col-lg-9'>
					<RenderDetail staff={props.staff} />
				</div>
			</div>
		</div>
	);
}

export default StaffDetail;
