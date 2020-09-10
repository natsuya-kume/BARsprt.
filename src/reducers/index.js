import { combineReducers } from 'redux';
import NotificationReducer from './NotificationReducer';

const reducer = combineReducers({
    NotificationReducer: NotificationReducer
})

export default reducer;