import React from 'react';
import store from '../redux/store';
import { setActiveUserID } from '../redux/actions';
import './User.css';

const handleContactClick = ({ user_id }) => {
	store.dispatch(setActiveUserID(user_id));
};

const User = ({ user }) => {
	const { name, profile_pic, status } = user;

	return (
		<div className='User' onClick={handleContactClick.bind(null, user)}>
			<img src={profile_pic} alt={name} className='User_pic' />
			<div className='User_details'>
				<p className='User_name'>{name}</p>
				<p className='User_status'>{status}</p>
			</div>
		</div>
	);
};

export default User;
