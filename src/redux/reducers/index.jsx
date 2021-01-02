import user from './user';
import contacts from './contacts';
import activeUserID from './activeUserID';
import messages from './messages';
import typing from './typing';
import { combineReducers } from 'redux';

export default combineReducers({
	user,
	contacts,
	messages,
	activeUserID,
	typing
});
