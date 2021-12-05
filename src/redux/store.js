import { createStore, combineReducers } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comment";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";

export const ConfigureStore = () => {
	const rootReducer = combineReducers({
		dishes: Dishes,
		comments: Comments,
		promotions: Promotions,
		leaders: Leaders,
	});
	const store = createStore(rootReducer);
	return store;
};
