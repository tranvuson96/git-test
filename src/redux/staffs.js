import { STAFFS } from "../shared/staffs";
import * as ActionTypes from "./ActionTypes";
import { DEPARTMENTS } from "../shared/staffs";

export const Departments = (
	state = { isLoading: true, err: null, depts: [] },
	action,
) => {
	switch (action.type) {
		case ActionTypes.ADD_DEPARTMENTS:
			return { ...state, isLoading: false, err: null, depts: action.payload };
		case ActionTypes.LOADING:
			return { ...state, isLoading: true, err: null, depts: [] };
		case ActionTypes.DEPARTMENTS_FAILED:
			return { ...state, isLoading: false, err: action.payload, depts: [] };
		default:
			return state;
	}
};

export const Staffs = (
	state = {
		isLoading: true,
		err: null,
		staffs: [],
	},
	action,
) => {
	switch (action.type) {
		case ActionTypes.ADD_STAFFS:
			return { ...state, isLoading: false, err: null, staffs: action.payload };
		case ActionTypes.LOADING:
			return { ...state, isLoading: true, err: null, staffs: [] };
		case ActionTypes.STAFFS_FAILED:
			return { ...state, isLoading: false, err: action.payload, staffs: [] };
		case ActionTypes.ADD_STAFF:
			var staff = action.payload;
			staff.id = state.staffs.length;
			staff.image = "/assets/images/alberto.png";
			console.log(staff);
			console.log(state.staffs.concat(staff));
			return { ...state, staffs: state.staffs.concat(staff) };
		default:
			return state;
	}
};
