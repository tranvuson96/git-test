import React, { Component } from "react";
import Main from "./Components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/store";

class App extends Component {
	render() {
		return (
			<Provider store={ConfigureStore()}>
				<BrowserRouter>
					<div>
						<Main />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
