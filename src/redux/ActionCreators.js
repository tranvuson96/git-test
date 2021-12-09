import * as ActionTypes from "./ActionTypes";

export const addStaff = (
	name,
	doB,
	salaryScale,
	startDate,
	department,
	annualLeave,
	overTime,
	salary,
	image,
) => ({
	type: ActionTypes.ADD_STAFF,
	payload: {
		name: name,
		doB: doB,
		salaryScale: salaryScale,
		startDate: startDate,
		department: department,
		annualLeave: annualLeave,
		overTime: overTime,
		salary: salary,
		image: image,
	},
});
