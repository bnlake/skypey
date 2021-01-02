import React from 'react';
import ChatWindow from '../containers/ChatWindow';
import Empty from './Empty';
import './Main.css';

const Main = ({ user, activeUserID }) => {
	const renderMainContent = () => {
		return activeUserID ? <ChatWindow activeUserID={activeUserID} /> : <Empty user={user} />;
	};

	return <main className='Main'>{renderMainContent()}</main>;
};

export default Main;
