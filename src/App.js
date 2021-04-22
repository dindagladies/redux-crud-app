import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import React from "react";
import { UserList } from "./features/users/UserList";

export default function App() {
	return (
		<Router>
			<div>
				<Switch>
					{/* / */}
					<Route path="/">
						<UserList />
					</Route>
					{/* add-user */}
					<Route path="/add-user">
						<h1>Add User</h1>
					</Route>
					{/* edit-user */}
					<Route>
						<h1>Edit User</h1>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}