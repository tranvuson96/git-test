import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
// thêm thông tin nhân viên mới
export const addStaff = (staff) => ({
	type: ActionTypes.ADD_STAFF,
	payload: staff,
});

export const postDetail =
	(name, doB, startDate, departmentId, salaryScale, annualLeave, overTime) =>
	(dispatch) => {
		const newStaff = {
			name: name,
			doB: doB,
			startDate: startDate,
			departmentId: departmentId,
			salaryScale: salaryScale,
			annualLeave: annualLeave,
			overTime: overTime,
			image: "/asset/images/alberto.png",
		};
		return fetch(baseUrl + "staffs", {
			method: "POST",
			body: JSON.stringify(newStaff),
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "same-origin",
		})
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
			.then((response) => dispatch(addStaff(response)))
			.catch((error) => {
				console.log("Post: ", error.message);
			});
	};
// xóa nhân viên
export const deleteId = (id) => ({
	type: ActionTypes.DELETE_STAFF,
	id,
});

export const deleteStaff = (id) => async (dispatch) => {
	console.log(id);
	return await fetch(baseUrl + "staffs/" + id, {
		method: "DELETE",
	})
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
		.then((response) => dispatch(deleteId(response)))
		.catch((err) => alert("Could not remove the staff ", err.message));
};

// sửa đổi thông tin nhân viên
export const editDetails = (staff) => ({
	type: ActionTypes.EDIT,
	payload: staff,
});

export const patchEdit =
	(
		id,
		name,
		doB,
		startDate,
		departmentId,
		salaryScale,
		annualLeave,
		overTime,
	) =>
	async (dispatch) => {
		const newDetails = {
			id,
			name: name,
			doB: doB,
			startDate: startDate,
			departmentId: departmentId,
			salaryScale: salaryScale,
			annualLeave: annualLeave,
			overTime: overTime,
			image: "/asset/images/alberto.png",
		};
		return await fetch(baseUrl + "staffs", {
			method: "PATCH",
			body: JSON.stringify(newDetails),
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "same-origin",
		})
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
			.then((response) => dispatch(editDetails(response)))
			.catch((err) => alert("Không thể chỉnh sửa ", err.message));
	};

// lấy dữ liệu từ server
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

// thông báo đang load
export const loading = () => ({
	type: ActionTypes.LOADING,
});
