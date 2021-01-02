import React from 'react';
import store from '../redux/store';
import _ from 'lodash';
import Header from '../components/Header';
import Chats from '../components/Chats';
import MessageInput from './MessageInput';

import './ChatWindow.css';

const ChatWindow = ({ activeUserID }) => {
	const activeUser = store.getState().contacts[activeUserID];
	const messages = store.getState().messages[activeUserID];
	const typing = store.getState().typing;

	return (
		<div className='ChatWindow' user={activeUser}>
			<Header user={activeUser} />
			<Chats messages={_.values(messages)} />
			<MessageInput message={typing} />
		</div>
	);
};

export default ChatWindow;
