import React from 'react';

import './Header.css';

const Header = ({ user }) => {
	return (
		<header>
			<h1>{user.name}</h1>
			<p>{user.status}</p>
		</header>
	);
};

export default Header;
