import React, { Component } from "react";
import SearchApp from "./SearchApp";
import AddApp from "./AddApp";

class SearchAndAdd extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className='container'>
				<div className='row d-inline-flex justify-content-around'>
					<AddApp
						staffs={this.props.staffs}
						addStaff={this.props.addStaff}
						depts={this.props.depts}
					/>
					<SearchApp staffs={this.props.staffs} />
				</div>
			</div>
		);
	}
}

export default SearchAndAdd;
