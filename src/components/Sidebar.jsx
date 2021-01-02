import React from "react";
import User from "../containers/User";
import "./Sidebar.css";

const Sidebar = ({ contacts }) => {
	return (
		<aside className="Sidebar">
			{contacts.map((contact, index) => {
				return <User key={contact.user_id} user={contact} />;
			})}
		</aside>
	);
};

export default Sidebar;
