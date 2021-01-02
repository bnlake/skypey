import { getMessages } from '../../static-data';
import _ from 'lodash';
import { SEND_MESSAGE } from '../actions/constants';

const messagesReducer = (state = getMessages(parseInt(Math.random() * 100)), action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			const { text, userID } = action.payload;
			// We're getting the messages property as the state. We need to obtain
			// the property of the activeUserID from the messages
			const allUserMsgs = state[userID];
			// Obtain the last key (should be a number)
			const number = parseInt(_.keys(allUserMsgs).pop() + 1);

			return {
				...state,
				[userID]: {
					...allUserMsgs,
					[number]: {
						number,
						text,
						is_user_msg: true
					}
				}
			};
		default:
			return state;
	}
};

export default messagesReducer;
