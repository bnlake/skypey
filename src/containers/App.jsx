import "./App.css";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import store from "../redux/store";
import _ from "lodash";

function App() {
	const { contacts, user, activeUserID } = store.getState();
	return (
		<div className="App">
			<Sidebar contacts={_.values(contacts)} />
			<Main user={user} activeUserID={activeUserID} />
		</div>
	);
}

export default App;
