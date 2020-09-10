import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import firebase from '../../config/firebase';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function Post(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const [liked, setLike] = React.useState(false)

    const toggleLike = () => {
        setLike(!liked)
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const docRef = firebase.firestore().collection("post").doc(props.id)

    const handleDelete = () => {
        docRef.get().then(function (doc) {
            if (doc.exists) {
                console.log(doc.data());
            } else {
                console.log("そのデータは存在していません");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        docRef.delete().then(function () {
            console.log("データを正常に削除しました!!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <>
            <div className="post">
                {/* <div className="icon-container">{props.icon}</div> */}
                <div className={classes.root}>
                    <Avatar alt="Remy Sharp" src={props.avatar} />
                </div>
                <div className="body-container">
                    <div className="status-display">
                        <span className="display-name">{props.displayName}</span>
                        <span className="account-name">@{props.accountName}</span>
                        <span className="current-time">{props.time}</span>
                    </div>
                    <div className="content">{props.content}</div>
                    <div className="status-action" style={{ position: "relative" }}>
                        <span onClick={toggleLike} >{liked ? '💓1' : '♡'}</span>
                        <DeleteIcon onClick={handleClickOpen} color="secondary" className="delete-icon" style={{ position: "absolute", right: "0" }} />
                    </div>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContentText style={{ margin: "20px", textAlign: "center" }}>
                    この投稿を削除しますか？
          　　　 </DialogContentText>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        キャンセル
          　　　　   </Button>
                    <Button onClick={handleClose} onClickCapture={handleDelete} color="primary">
                        削除
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Post