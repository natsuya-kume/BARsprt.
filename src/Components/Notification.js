import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import NotificationSnackbar from './NotificationSnackbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Notification = (props) => {
    const classes = useStyles();

    const { NotificationReducer, actions } = props;

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={NotificationReducer.isOpen}
                autoHideDuration={3000}
                onClose={actions.closeNotification}
            >
                <NotificationSnackbar
                    onClose={actions.closeNotification}
                    variant={NotificationReducer.variant}
                    message={NotificationReducer.message}
                />
            </Snackbar>
        </div>
    );
}

const mapState = (state, ownProps) => ({
    NotificationReducer: state.NotificationReducer,
});
function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapState, mapDispatch)(Notification)