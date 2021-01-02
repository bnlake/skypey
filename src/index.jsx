import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import store from "./redux/store";

/**
 * Custom function to log the state to the browser console
 */
function fancyLog() {
	console.log(store.getState());
}

/**
 * Moved the render call into a separate method so we can also use it
 * in the redux subscribe
 */
const render = () => {
	fancyLog();
	return ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById("root")
	);
};

render();

store.subscribe(render);
