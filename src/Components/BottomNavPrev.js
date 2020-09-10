import React from 'react';
import history from "./History"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChatIcon from '@material-ui/icons/Chat';
import NoteIcon from '@material-ui/icons/Note';
// import PeopleIcon from '@material-ui/icons/People';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { NavContext } from '../NavContext';

const useStyles = makeStyles({
    root: {
        // width: 375,
        width: "100%"
    },
    // root: {
    //     width: "100%",
    //     [theme.breakpoints.up('md')]: {
    //         marginLeft: '10px',
    //     },
    // },
});


export default function BottomNav() {
    const classes = useStyles();

    const { value, setValue } = React.useContext(NavContext);

    const changePageNews = () => {
        history.push('/news')
    }

    const changePageChat = () => {
        history.push('/chat')
    }

    const changePageVideo = () => {
        history.push('/video')
    }

    // const changePagePlayer = () => {
    //     history.push('/player')
    // }

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            style={{ position: "fixed", bottom: "0" }}
        >
            <BottomNavigationAction label="ニュース" icon={<NoteIcon />} onClick={changePageNews} />
            <BottomNavigationAction label="チャット" icon={<ChatIcon />} onClick={changePageChat} />
            <BottomNavigationAction label="動画" icon={<YouTubeIcon />} onClick={changePageVideo} />
            {/* <BottomNavigationAction label="選手" icon={<PeopleIcon />} onClick={changePagePlayer} /> */}
        </BottomNavigation>
    );
}