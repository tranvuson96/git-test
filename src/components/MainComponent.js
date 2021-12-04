import React from "react";
import Menu from "./MenuComponent";
import Details from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { COMMENTS } from "../shared/comment";

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
			leaders: LEADERS,
			promotions: PROMOTIONS,
			comments: COMMENTS,
		};
	}

	render() {
		const DishWithId = ({ match }) => {
			console.log(match.params.dishId);
			return (
				<React.Fragment>
					<Details
						dish={
							this.state.dishes.filter(
								(dish) => dish.id === parseInt(match.params.dishId, 10),
							)[0]
						}
						comments={this.state.comments.filter(
							(comment) => comment.dishId === parseInt(match.params.dishId, 10),
						)}
					/>
				</React.Fragment>
			);
		};
		const HomePage = () => {
			return (
				<Home
					dish={this.state.dishes.filter((dish) => dish.featured)[0]}
					promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
					leader={this.state.leaders.filter((leader) => leader.featured)[0]}
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
						component={() => <Menu dishes={this.state.dishes} />}
					/>
					<Route path='/menu/:dishId' component={DishWithId} />
					<Route exact path='/contactus' component={Contact} />
					<Route
						path='/aboutus'
						component={() => <About leaders={this.state.leaders} />}
					/>
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
