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
import Loading from "../Loading";

function RenderList({ staffs, err, isLoading }) {
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

function Members(props) {
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
				<RenderList
					staffs={props.list}
					isLoading={props.loading}
					err={props.errMess}
				/>
			</div>
		</div>
	);
}

export default Members;
