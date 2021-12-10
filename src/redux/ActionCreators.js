import * as ActionTypes from "./ActionTypes";

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
