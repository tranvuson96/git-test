import { combineReducers, createStore } from "redux";
import { Staffs } from "./staffs";
import { Role } from "./role";
import { Departments } from "./departments";

export const ConfigureStore = () => {
	const Reducer = combineReducers({
		staffs: Staffs,
		role: Role,
		departments: Departments,
	});
	const store = createStore(Reducer);
	return store;
};
