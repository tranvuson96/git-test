import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Detail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import About from "./AboutUsComponent";
import {
	Routes,
	Route,
	Navigate,
	useParams,
	useNavigate,
} from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders,
	};
};

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const HomePage = () => {
			return (
				<Home
					dish={this.props.dishes.filter((dish) => dish.featured)[0]}
					promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
					leader={this.props.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		};

		const DishWithId = (props) => {
			let id = useParams();
			return (
				<Detail
					dish={
						props.dishes.filter(
							(dish) => dish.id === parseInt(id.dishId, 10),
						)[0]
					}
					comments={props.comments.filter(
						(comment) => comment.dishId === parseInt(id.dishId, 10),
					)}
				/>
			);
		};
		return (
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/home' element={<HomePage />} />
					<Route
						path='/aboutus'
						element={<About leaders={this.props.leaders} />}
					/>
					<Route
						exact
						path='/menu'
						element={<Menu dishes={this.props.dishes} />}
					/>
					<Route
						path='/menu/:dishId'
						element={
							<DishWithId
								dishes={this.props.dishes}
								comments={this.props.comments}
							/>
						}
					/>
					<Route exact path='/contactus' element={<Contact />} />
					<Route path='/' element={<Navigate replace to='/home' />} />
				</Routes>
				<Footer />
			</div>
		);
	}
}

export default connect(mapStateToProps)(function (props) {
	const navigate = useNavigate();

	return <Main {...props} navigate={navigate} />;
});
