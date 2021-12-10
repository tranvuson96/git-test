import * as ActionTypes from "./ActionTypes";

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
			return { ...state, staffs: state.staffs.concat(staff) };
		case ActionTypes.DELETE_STAFF:
			return {
				...state,
				staffs: state.staffs.filter((staff) => staff.id !== action.payload),
			};
		case ActionTypes.EDIT:
			var newDetail = action.payload;
			var index = state.staffs.indexOf(newDetail.id);
			state.staffs[index] = newDetail;
			return state;
		default:
			return state;
	}
};
