import React from "react";
import Menu from "./MenuComponent";
import Details from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapPropsToState = (state) => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders,
	};
};

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const DishWithId = ({ match }) => {
			console.log(match.params.dishId);
			return (
				<React.Fragment>
					<Details
						dish={
							this.props.dishes.filter(
								(dish) => dish.id === parseInt(match.params.dishId, 10),
							)[0]
						}
						comments={this.props.comments.filter(
							(comment) => comment.dishId === parseInt(match.params.dishId, 10),
						)}
					/>
				</React.Fragment>
			);
		};
		const HomePage = () => {
			return (
				<Home
					dish={this.props.dishes.filter((dish) => dish.featured)[0]}
					promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
					leader={this.props.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		};
		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route
						exact
						path='/menu'
						component={() => <Menu dishes={this.props.dishes} />}
					/>
					<Route path='/menu/:dishId' component={DishWithId} />
					<Route exact path='/contactus' component={Contact} />
					<Route
						path='/aboutus'
						component={() => <About leaders={this.props.leaders} />}
					/>
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapPropsToState)(Main));
