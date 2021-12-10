import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/FooterComponent";
import HomePage from "./HomePage/HomePage";
import StaffList from "./stafflist/StaffList";
import StaffDetail from "./stafflist/StaffDetail";
import Departments from "./departments/Departments";
import Members from "./departments/Members";
import Salary from "./stafflist/salary";
import SearchAndAdd from "./SearchAndAdd/SearchAndAdd";
import { connect } from "react-redux";
import { addStaff } from "../redux/ActionCreators";

const mapPropsToState = (state) => {
	return {
		staffs: state.staffs,
		departments: state.departments,
		role: state.role,
	};
};
const mapDispatchToProps = (dispatch) => ({
	addStaff: (
		name,
		doB,
		startDate,
		salaryScale,
		department,
		annualLeave,
		overTime,
	) =>
		dispatch(
			addStaff(
				name,
				doB,
				startDate,
				salaryScale,
				department,
				annualLeave,
				overTime,
			),
		),
});

class MainComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		const StaffWithId = ({ match }) => {
			return (
				<StaffDetail
					depts={this.props.departments}
					staff={
						this.props.staffs.filter(
							(staff) => staff.id === parseInt(match.params.id),
						)[0]
					}
				/>
			);
		};
		const DeptMembers = ({ match }) => {
			return (
				<Members
					list={this.props.staffs.filter(
						(staff) => staff.department.name === match.params.deptName,
					)}
				/>
			);
		};
		return (
			<div>
				<Header />
				<SearchAndAdd
					depts={this.props.departments}
					staffs={this.props.staffs}
					addStaff={this.props.addStaff}
				/>
				<Switch>
					<Route
						path='/home'
						component={() => <HomePage staffs={this.props.staffs} />}
					/>
					<Route
						exact
						path='/staffs'
						component={() => <StaffList staffs={this.props.staffs} />}
					/>
					<Route path='/staffs/:id' component={StaffWithId} />
					<Route
						exact
						path='/departments'
						component={() => <Departments depts={this.props.departments} />}
					/>
					<Route path='/departments/:deptName' component={DeptMembers} />
					<Route
						path='/salary'
						component={() => <Salary staffs={this.props.staffs} />}
					/>
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default withRouter(
	connect(mapPropsToState, mapDispatchToProps)(MainComponent),
);
