import { SEND_MESSAGE, SET_TYPING_VALUE } from '../actions/constants';

const typingReducer = (state = '', action) => {
	switch (action.type) {
		case SET_TYPING_VALUE:
			return action.payload;
		case SEND_MESSAGE:
			return '';
		default:
			return state;
	}
};

export default typingReducer;
