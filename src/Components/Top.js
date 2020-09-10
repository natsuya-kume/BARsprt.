import React from 'react'
import firebase from '../config/firebase'
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import history from "./History"
import AppInfo from './AppInfo';


function Copyright() {
    return (
        <Typography variant="body2" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                BARsprt.
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({

    paper: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function Login({ history }) {
    const classes = useStyles();

    const goHome = () => {

        firebase.auth().signInAnonymously().catch((error) => {
            console.log(`[error] Can not signin anonymouse (${error.code}:${error.message})`);
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                let uid = user.uid;
                console.log(`あたなのIDは${uid}です`)
            }
        });
    }

    const changePageNews = () => {
        history.push('/news')
    }

    return (
        <>
            <Container component="main" maxWidth="xs" className="backImg">
                <Typography component="h1" variant="h2" style={{ marginTop: "80px", textAlign: "center", color: "#cc0000", fontWeight: "bold", fontFamily: "Montserrat" }}>
                    Welcome to Barcelona!!
                </Typography>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    style={{ marginTop: "170px" }}
                    onClick={changePageNews}
                    onClickCapture={goHome}
                >
                    ホームへ
                </Button>
            </Container>
            <AppInfo />
            <Box className="box">
                <Copyright />
            </Box>
        </>
    );
}