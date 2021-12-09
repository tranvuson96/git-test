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
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import {
	addStaff,
	fetchStaffs,
	fetchDepartments,
} from "../redux/ActionCreators";

const mapPropsToState = (state) => {
	return {
		staffs: state.staffs,
		departments: state.departments,
		role: state.role,
	};
};
const mapDispatchToProps = (dispatch) => ({
	fetchStaffs: () => {
		dispatch(fetchStaffs());
	},
	fetchDepartments: () => {
		dispatch(fetchDepartments());
	},
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
	componentDidMount() {
		this.props.fetchStaffs();
		this.props.fetchDepartments();
	}
	render() {
		console.log(this.props.staffs);
		const StaffWithId = ({ match }) => {
			return (
				<StaffDetail
					staff={
						this.props.staffs.staffs.filter(
							(staff) => staff.id === parseInt(match.params.id),
						)[0]
					}
					depts={this.props.departments.depts}
					errMess={this.props.staffs.err}
					loading={this.props.staffs.isLoading}
					errMessD={this.props.departments.err}
					loadingD={this.props.departments.isLoading}
				/>
			);
		};
		const DeptMembers = ({ match }) => {
			const members = this.props.staffs.staffs.filter(
				(staff) => staff.departmentId === match.params.deptId,
			);
			return (
				<Members
					list={members}
					errMess={this.props.staffs.err}
					loading={this.props.staffs.isLoading}
				/>
			);
		};
		return (
			<div>
				<Header />
				<SearchAndAdd
					staffs={this.props.staffs.staffs}
					addStaff={this.props.addStaff}
					errMess={this.props.staffs.err}
					loading={this.props.staffs.isLoading}
				/>
				<TransitionGroup>
					<CSSTransition
						key={this.props.location.key}
						classNames='page'
						timeout={300}>
						<Switch>
							<Route
								path='/home'
								component={() => (
									<HomePage
										loading={this.props.staffs.isLoading}
										staffs={this.props.staffs.staffs}
										errMess={this.props.staffs.err}
									/>
								)}
							/>
							<Route
								exact
								path='/staffs'
								component={() => (
									<StaffList
										staffs={this.props.staffs.staffs}
										errMess={this.props.staffs.err}
										loading={this.props.staffs.isLoading}
									/>
								)}
							/>
							<Route path='/staffs/:id' component={StaffWithId} />
							<Route
								exact
								path='/departments'
								component={() => (
									<Departments
										depts={this.props.departments.depts}
										errMess={this.props.departments.err}
										loading={this.props.departments.isLoading}
									/>
								)}
							/>
							<Route path='/departments/:deptId' component={DeptMembers} />
							<Route
								path='/salary'
								component={() => (
									<Salary
										staffs={this.props.staffs.staffs}
										errMess={this.props.staffs.err}
										loading={this.props.staffs.isLoading}
									/>
								)}
							/>
							<Redirect to='/home' />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				<Footer />
			</div>
		);
	}
}

export default withRouter(
	connect(mapPropsToState, mapDispatchToProps)(MainComponent),
);
