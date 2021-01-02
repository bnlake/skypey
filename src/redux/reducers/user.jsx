import { generateUser } from '../../static-data';

const userReducer = (state = generateUser(), action) => {
	switch (action) {
		default:
			return state;
	}
};

export default userReducer;
