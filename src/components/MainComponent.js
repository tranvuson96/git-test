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
import { actions } from "react-redux-form";
import {
	fetchDishes,
	fetchComments,
	fetchPromos,
	postComment,
} from "../redux/actionCreators";

const mapPropsToState = (state) => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders,
	};
};

const mapDispatchToProps = (dispatch) => ({
	postComment: (dishId, rating, author, comment) =>
		dispatch(postComment(dishId, rating, author, comment)),
	fetchDishes: () => {
		dispatch(fetchDishes());
	},
	resetFeedbackForm: () => {
		dispatch(actions.reset("feedback"));
	},
	fetchComments: () => dispatch(fetchComments()),
	fetchPromos: () => dispatch(fetchPromos()),
});

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.props.fetchDishes();
		this.props.fetchComments();
		this.props.fetchPromos();
	}

	render() {
		const DishWithId = ({ match }) => {
			console.log(match.params.dishId);
			return (
				<React.Fragment>
					<Details
						dish={
							this.props.dishes.dishes.filter(
								(dish) => dish.id === parseInt(match.params.dishId, 10),
							)[0]
						}
						isLoading={this.props.dishes.isLoading}
						errMess={this.props.dishes.errMess}
						comments={this.props.comments.comments.filter(
							(comment) => comment.dishId === parseInt(match.params.dishId, 10),
						)}
						commentsErrMess={this.props.comments.errMess}
						postComment={this.props.postComment}
					/>
				</React.Fragment>
			);
		};
		const HomePage = () => {
			return (
				<Home
					dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					dishesLoading={this.props.dishes.isLoading}
					dishesErrMess={this.props.dishes.errMess}
					promotion={
						this.props.promotions.promotions.filter(
							(promo) => promo.featured,
						)[0]
					}
					promoLoading={this.props.promotions.isLoading}
					promoErrMess={this.props.promotions.errMess}
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
						component={() => <Menu dishes={this.props.dishes.dishes} />}
					/>
					<Route path='/menu/:dishId' component={DishWithId} />
					<Route
						exact
						path='/contactus'
						component={() => (
							<Contact resetFeedbackForm={this.props.resetFeedbackForm} />
						)}
					/>
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

export default withRouter(connect(mapPropsToState, mapDispatchToProps)(Main));
