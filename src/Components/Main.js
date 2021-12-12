import React, { Component } from "react";
import Menu from "./Menu";
export class Main extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Menu dishes={this.props.dishes} />
			</div>
		);
	}
}

export default Main;
