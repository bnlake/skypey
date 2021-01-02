import { contacts } from '../../static-data.js';

const contactsReducer = (state = contacts, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default contactsReducer;
