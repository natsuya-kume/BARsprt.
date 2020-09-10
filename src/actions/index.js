import * as actionTypes from '../utils/actionTypes';

// Notification操作
export const setNotification = (variant, message) => ({
    type: actionTypes.SET_NOTIFICATION,
    variant: variant,
    message: message,
});
export const closeNotification = (variant, message) => ({
    type: actionTypes.CLOSE_NOTIFICATION,
});