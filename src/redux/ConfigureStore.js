import { combineReducers, createStore } from "redux";
import { Staffs, Departments } from "./staffs";
import { Role } from "./role";

export const ConfigureStore = () => {
	const Reducer = combineReducers({
		staffs: Staffs,
		role: Role,
		departments: Departments,
	});
	const store = createStore(Reducer);
	return store;
};
