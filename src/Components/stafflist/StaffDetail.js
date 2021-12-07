import React from "react";
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const RenderDetail = (props) => {
	console.log(props);
	if (props != null) {
		return (
			<Card>
				<CardBody>
					<CardTitle>Họ và tên:{props.name}</CardTitle>
					<p>Ngày vào công ty:{props.start}</p>
					<p>Ngày sinh:{props.dob}</p>
					<p>Phòng ban:{props.department.name}</p>
					<p>Số ngày nghỉ còn lại:{props.annuaLLeave}</p>
					<p>Số ngày đã làm thêm:{props.oveRTime}</p>
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
					<RenderDetail
						name={props.staff.name}
						dob={dateFormat(props.staff.doB, "dd/mm/yyyy")}
						start={dateFormat(props.staff.startDate, "dd/mm/yyyy")}
						department={props.staff.department}
						annuaLLeave={props.staff.annualLeave}
						oveRTime={props.staff.overTime}
					/>
				</div>
			</div>
		</div>
	);
}

export default StaffDetail;
