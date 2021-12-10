import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import React from "react";
import RenderList from "./RenderList";

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
				<RenderList
					depts={props.depts}
					deleteStaff={props.deleteStaff}
					patchEdit={props.patchEdit}
					staffs={props.staffs}
					err={props.errMess}
					isLoading={props.loading}
				/>
			</div>
		</div>
	);
}

export default StaffList;
