import React, { Component } from "react";
import { STAFFS, DEPARTMENTS, ROLE } from "../shared/staffs";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/FooterComponent";
import HomePage from "./HomePage/HomePage";
import StaffList from "./stafflist/StaffList";
import StaffDetail from "./stafflist/StaffDetail";
import Departments from "./departments/Departments";
import Members from "./departments/Members";
import Salary from "./stafflist/salary";

class MainComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			staffs: STAFFS,
			departments: DEPARTMENTS,
			role: ROLE,
		};
	}
	render() {
		const StaffWithId = ({ match }) => {
			return (
				<StaffDetail
					staff={
						this.state.staffs.filter(
							(staff) => staff.id === parseInt(match.params.id),
						)[0]
					}
				/>
			);
		};
		const DeptMembers = ({ match }) => {
			return (
				<Members
					list={this.state.staffs.filter(
						(staff) => staff.department.name === match.params.deptName,
					)}
				/>
			);
		};
		return (
			<div>
				<Header staffs={this.state.staffs} />
				<Switch>
					<Route
						path='/home'
						component={() => <HomePage staffs={this.state.staffs} />}
					/>
					<Route
						exact
						path='/staffs'
						component={() => <StaffList staffs={this.state.staffs} />}
					/>
					<Route path='/staffs/:id' component={StaffWithId} />
					<Route
						exact
						path='/departments'
						component={() => <Departments depts={this.state.departments} />}
					/>
					<Route path='/departments/:deptName' component={DeptMembers} />
					<Route
						path='/salary'
						component={() => <Salary staffs={this.state.staffs} />}
					/>
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default MainComponent;
