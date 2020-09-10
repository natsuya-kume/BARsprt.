import React from 'react';
import faker from "faker"
import firebase from '../../config/firebase'

import { makeStyles } from '@material-ui/core/styles';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"

import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"

import shortid from 'shortid'

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(10),
        right: theme.spacing(3),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


function PostButton(props) {

    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [open, setOpen] = React.useState(false);

    const textareaRef = React.useRef(null);

    const sendPost = React.useCallback(() => {

        const now = new Date();

        const month = now.getMonth();
        const date = now.getDate();
        const hour = now.getHours();
        const minute = now.getMinutes();

        const timeInfo = `${month + 1}/${date} ${hour}:${minute}`;

        firebase.firestore().collection('post').add({
            id: shortid.generate(),
            avatar: faker.image.avatar(),
            displayName: faker.name.lastName(),
            accountName: faker.name.lastName(),
            content: textareaRef.current.value,
            time: timeInfo,
        })

        if (textareaRef.current) {
            props.addPost({
                id: shortid.generate(),
                avatar: faker.image.avatar(),
                displayName: faker.name.lastName(),
                accountName: faker.name.lastName(),
                time: timeInfo,
                content: textareaRef.current.value,
            });
        }
    }, [textareaRef.current, props.addPost]);

    return (
        <div>
            <Tooltip title="Add" aria-label="add" >
                <Fab color="secondary" className={classes.absolute} onClick={handleClickOpen} style={{ position: "fixed" }}>
                    <PostAddIcon />
                </Fab>
            </Tooltip>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent >
                    <textarea className="tweet-textarea" ref={textareaRef}></textarea>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        キャンセル
          　　　　   </Button>
                    <Button onClick={sendPost} onClickCapture={handleClose} color="primary">
                        投稿
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}

export default PostButton










