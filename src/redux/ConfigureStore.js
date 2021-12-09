import { combineReducers, createStore, applyMiddleware } from "redux";
import { Staffs, Departments } from "./staffs";
import { Role } from "./role";
import thunk from "redux-thunk";
import logger from "redux-logger";
export const ConfigureStore = () => {
	const Reducer = combineReducers({
		staffs: Staffs,
		role: Role,
		departments: Departments,
	});
	const store = createStore(Reducer, applyMiddleware(thunk, logger));
	return store;
};
