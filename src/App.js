import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main";
import { DISHES } from "./share/dishes";
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
		};
	}
	render() {
		return <Main dishes={this.state.dishes} />;
	}
}

export default App;
