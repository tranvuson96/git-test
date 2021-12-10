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
import dateFormat from "dateformat";
import Loading from "../Loading";
const RenderDetail = (props) => {
	if (props.isLoading) {
		return (
			<div className='container'>
				<div className='row'>
					<Loading />
				</div>
			</div>
		);
	} else if (props.err) {
		return (
			<div className='container'>
				<div className='row'>
					<h4>{props.err}</h4>
				</div>
			</div>
		);
	} else if (props.staff != null) {
		return (
			<Card>
				<CardBody>
					<CardTitle>Họ và tên:{props.staff.name}</CardTitle>
					<p>
						Ngày vào công ty:{dateFormat(props.staff.startDate, "dd/mm/yyyy")}
					</p>
					<p>Ngày sinh:{dateFormat(props.staff.doB, "dd/mm/yyyy")}</p>
					<p>Phòng ban:{props.dept}</p>
					<p>Số ngày nghỉ còn lại:{props.staff.annualLeave}</p>
					<p>Số ngày đã làm thêm:{props.staff.overTime}</p>
				</CardBody>
			</Card>
		);
	} else {
		return (
			<div>
				<h4>Some unknown errors</h4>
			</div>
		);
	}
};

function StaffDetail(props) {
	if (props.loading && props.loadingD) {
		return (
			<div className='container'>
				<div className='row'>
					<Loading />
				</div>
			</div>
		);
	} else if (props.errMess && props.errMessD) {
		return <h4>{props.errMess}</h4>;
	} else if (
		props.depts != null &&
		props.staff != null &&
		props.staff.departmentId != null
	){
		const dept = props.depts.filter(
			(dept) => dept.id === props.staff.departmentId,
		)[0].name;
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
							staff={props.staff}
							dept={dept}
							err={props.errMess}
							isLoading={props.loading}
						/>
					</div>
				</div>
			</div>
		);
	}
	else {
		return <h4>this staff's detail has been deleted</h4>;
	}
}

export default StaffDetail;
