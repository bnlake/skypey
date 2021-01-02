import React from 'react';
import store from '../redux/store';
import { setTypingValue, sendMessage } from '../redux/actions';

import './MessageInput.css';

const MessageInput = ({ message }) => {
	/**
	 * Handle a change on the message input field
	 * @param {Event} e
	 */
	const handleChange = (e) => {
		store.dispatch(setTypingValue(e.target.value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const state = store.getState();
		const { typing, activeUserID } = state;
		store.dispatch(sendMessage(typing, activeUserID));
	};

	return (
		<form className='MessageInput' onSubmit={handleSubmit}>
			<input
				className='MessageInput_input'
				value={message}
				onChange={handleChange}
				placeholder='Type to respond...'
			/>
		</form>
	);
};

export default MessageInput;
