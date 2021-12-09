import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import Loading from "../Loading";
function RenderHome({ staffs, err, isLoading }) {
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
	} else {
		var protype = staffs.filter((staff) => staff.overTime === 10);
		return protype.map((staff) => {
			return (
				<div className='col-12 col-md-6 col-lg-3' key={staff.id}>
					<Card>
						<Link to={`/staffs/${staff.id}`}>
							<CardImg src={staff.image} alt={staff.name} />
							<CardBody>
								<CardTitle>{staff.name}</CardTitle>
								<CardText>
									Ngày vào làm:{dateFormat(staff.startDate, "dd/mm/yyyy")}
								</CardText>
							</CardBody>
						</Link>
					</Card>
				</div>
			);
		});
	}
}

export default function HomePage(props) {
	return (
		<div className='container'>
			<div className='row'>
				<p>Nhân viên tiêu biểu của tháng</p>
			</div>
			<div className='row'>
				<RenderHome
					staffs={props.staffs}
					err={props.errMess}
					isLoading={props.loading}
				/>
			</div>
		</div>
	);
}
