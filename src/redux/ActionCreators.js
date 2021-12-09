import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addStaff = (
	name,
	doB,
	startDate,
	department,
	salaryScale,
	annualLeave,
	overTime,
) => ({
	type: ActionTypes.ADD_STAFF,
	payload: {
		name: name,
		doB: doB,
		startDate: startDate,
		salaryScale: salaryScale,
		department: department,
		annualLeave: annualLeave,
		overTime: overTime,
	},
});

export const fetchStaffs = () => async (dispatch) => {
	dispatch(loading(true));
	return await fetch(baseUrl + "staffs")
		.then(
			(response) => {
				if (response.ok) {
					return response.json();
				} else {
					var error = new Error(
						"Error " + response.status + ": " + response.statusText,
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errmess = new Error(error.message);
				throw errmess;
			},
		)
		.then((staffs) => dispatch(addStaffs(staffs)))
		.catch((error) => dispatch(staffsFailed(error.message)));
};

export const staffsFailed = (err) => ({
	type: ActionTypes.STAFFS_FAILED,
	payload: err,
});

export const addStaffs = (staffs) => ({
	type: ActionTypes.ADD_STAFFS,
	payload: staffs,
});

export const fetchDepartments = () => async (dispatch) => {
	dispatch(loading(true));
	return await fetch(baseUrl + "departments")
		.then(
			(response) => {
				if (response.ok) {
					return response.json();
				} else {
					var error = new Error(
						"Error " + response.status + ": " + response.statusText,
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errmess = new Error(error.message);
				throw errmess;
			},
		)
		.then((depts) => {
			console.log(depts);
			dispatch(addDepartments(depts));
		})
		.catch((error) => dispatch(departmentsFailed(error.message)));
};

export const departmentsFailed = (err) => ({
	type: ActionTypes.DEPARTMENTS_FAILED,
	payload: err,
});

export const addDepartments = (depts) => ({
	type: ActionTypes.ADD_DEPARTMENTS,
	payload: depts,
});

export const loading = () => ({
	type: ActionTypes.LOADING,
});
