import React from "react";
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "./LoadingComponent";

function RenderMenu({ dish }) {
	return (
		<Card key={dish.id}>
			<Link to={`/menu/${dish.id}`}>
				<CardImg width='100%' src={dish.image} alt={dish.name} />
				<CardImgOverlay>
					<CardTitle>{dish.name}</CardTitle>
				</CardImgOverlay>
			</Link>
		</Card>
	);
}

const Menu = (props) => {
	const menuItems = props.dishes.map((dish) => {
		return (
			<div className='col-12 col-md-5 m-1' key={dish.id}>
				<RenderMenu dish={dish} />
			</div>
		);
	});
	if (props.isLoading) {
		return (
			<div className='container'>
				<div className='row'>
					<Loading />
				</div>
			</div>
		);
	} else if (props.errMess) {
		return (
			<div className='container'>
				<div className='row'>
					<h4>{props.errMess}</h4>
				</div>
			</div>
		);
	} else
		return (
			<div className='container'>
				<div className='row'>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to='/home'>Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>Menu</BreadcrumbItem>
					</Breadcrumb>
					<div className='col-12'>
						<h3>Menu</h3>
						<hr />
					</div>
				</div>
				<div className='row'>{menuItems}</div>
			</div>
		);
};

export default Menu;
