import { SEND_MESSAGE, SET_ACTIVE_USER_ID, SET_TYPING_VALUE } from './constants';

/**
 * Dispatches a redux action to set the active user id
 * @param {int} id
 * @returns {Object}
 */
export const setActiveUserID = (id) => {
	return {
		type: SET_ACTIVE_USER_ID,
		payload: id
	};
};

/**
 * Dispatches a redux action to set the typing value
 * @param {String} text
 * @returns {Object}
 */
export const setTypingValue = (text) => {
	return {
		type: SET_TYPING_VALUE,
		payload: text
	};
};

/**
 * Dispatches a redux action to submit the text to a message
 * @param {String} text 
 * @param {String} userID 
 */
export const sendMessage = (text, userID) => {
	return {
		type: SEND_MESSAGE,
		payload: {
			text,
			userID
		}
	}
}