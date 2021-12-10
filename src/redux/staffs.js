import { STAFFS } from "../shared/staffs";
import * as ActionTypes from "./ActionTypes";
import { DEPARTMENTS } from "../shared/staffs";

export const Departments = (state = DEPARTMENTS, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const Staffs = (state = STAFFS, action) => {
	switch (action.type) {
		case ActionTypes.ADD_STAFF:
			var staff = action.payload;
			staff.id = state.length;
			staff.image = "/assets/images/alberto.png";
			console.log(staff);
			console.log(state.concat(staff));
			return state.concat(staff);
		default:
			return state;
	}
};
