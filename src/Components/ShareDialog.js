import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
    FacebookShareButton,
    LineShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailShareButton,
    TumblrShareButton,

    FacebookIcon,
    TwitterIcon,
    LineIcon,
    LinkedinIcon,
    TumblrIcon,
    EmailIcon,
} from 'react-share'

import { CopyToClipboard } from 'react-copy-to-clipboard'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'

const useStyles = makeStyles((theme) => ({
    root: {
    },
    snsShareButtonArea: {
        padding: 10,
        display: 'flex',
        justifyContent: 'space-around',
    },
    snsShareButton: {
    },
    copyToCripboardButton: {

    },
}));

const ShareDialog = (props) => {
    const classes = useStyles();

    const { actions } = props

    const shareUrl = "https://corporate-app-1f6d1.web.app";
    const title = "Barcelona-App";


    return (
        <Dialog
            open={props.open}
            onClose={() => props.onClose()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.root}
        >
            <DialogTitle>このアプリをシェアする</DialogTitle>
            <Divider />
            <DialogContent className={classes.snsShareButtonArea}>
                <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className={classes.snsShareButton}>
                    <FacebookIcon
                        size={48}
                        round />
                </FacebookShareButton>
                <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className={classes.snsShareButton}>
                    <TwitterIcon
                        size={48}
                        round />
                </TwitterShareButton>
                <LineShareButton
                    url={shareUrl}
                    className={classes.snsShareButton}>
                    <LineIcon
                        size={48}
                        round />
                </LineShareButton>
            </DialogContent>
            <DialogContent className={classes.snsShareButtonArea}>
                <LinkedinShareButton
                    url={shareUrl}
                    title={title}
                    windowWidth={750}
                    windowHeight={600}
                    className={classes.snsShareButton}>
                    <LinkedinIcon
                        size={48}
                        round />
                </LinkedinShareButton>
                <TumblrShareButton
                    url={shareUrl}
                    title={title}
                    windowWidth={660}
                    windowHeight={460}
                    className={classes.snsShareButton}>
                    <TumblrIcon
                        size={48}
                        round />
                </TumblrShareButton>
                <EmailShareButton
                    url={shareUrl}
                    subject={title}
                    body="body"
                    className={classes.snsShareButton}>
                    <EmailIcon
                        size={48}
                        round />
                </EmailShareButton>
            </DialogContent>
            <DialogContent className={classes.snsShareButtonArea}>
                <CopyToClipboard text={shareUrl}
                    onCopy={() => actions.setNotification('success', 'クリップボードにコピーしました')}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.copyToCripboardButton}
                    >
                        URLをコピー
                    </Button>
                </CopyToClipboard>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button onClick={() => props.onClose()} color="primary" autoFocus>
                    閉じる
                </Button>
            </DialogActions>
        </Dialog>
    )
}

ShareDialog.propTypes = {
    loading: PropTypes.bool,
};

const mapState = (state, ownProps) => ({
})
function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapState, mapDispatch)(ShareDialog)