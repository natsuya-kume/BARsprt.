import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';
import NoteIcon from '@material-ui/icons/Note';
import ChatIcon from '@material-ui/icons/Chat';
import YouTubeIcon from '@material-ui/icons/YouTube';
import HelpIcon from '@material-ui/icons/Help';
import MenuIcon from '@material-ui/icons/Menu';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import ShareIcon from '@material-ui/icons/Share';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import history from "./History";
import ShareDialog from './ShareDialog';
import ResponsiveDrawerListItem from './ResponsiveDrawerListItem';
const drawerWidth = 240;
const bottomNavigationHeight = 46;
const headerNavigationHeight = 46;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        zIndex: 1,
        position: 'relative',
        display: 'flex',
        width: '100%',
        overflow: 'hidden'
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    toolBar: {
        justifyContent: 'space-between', // 中央寄せのため追加
        minHeight: bottomNavigationHeight,
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        height: '100vh',
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        paddingTop: `calc(10px + ${headerNavigationHeight}px)`,
        paddingBottom: `calc(10px + ${bottomNavigationHeight}px)`,
        paddingLeft: 0,
        paddingRight: 0,
        overflow: 'scroll',
        height: '100vh',
        [theme.breakpoints.up('md')]: {
            paddingBottom: 10,
        },
    },
    drawer: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    soccerIcon: {
        marginTop: "15px"
    },

}));

const ResponsiveDrawer = (props) => {
    const classes = useStyles();
    const { window } = props;
    const theme = useTheme();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const [shareDialogOpen, setShareDialogOpen] = React.useState(false)

    const shareDialogToggle = () => {
        setShareDialogOpen(!shareDialogOpen)
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const goBackeHome = () => {
        history.push('/')
    }

    const changePageNews = () => {
        history.push('/news')
    }

    const changePageChat = () => {
        history.push('/chat')
    }

    const changePageVideo = () => {
        history.push('/video')
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ResponsiveDrawerListItem
                    to="/"
                    onClick={goBackeHome}
                    icon={<HomeIcon />}
                    text="トップページ"
                />
                <ResponsiveDrawerListItem
                    to="/news"
                    onClick={changePageNews}
                    icon={< NoteIcon />}
                    text="ニュース"
                />
                <ResponsiveDrawerListItem
                    to="/chat"
                    onClick={changePageChat}
                    icon={< ChatIcon />}
                    text="チャット"
                />
                <ResponsiveDrawerListItem
                    to="/video"
                    onClick={changePageVideo}
                    icon={< YouTubeIcon />}
                    text="動画"
                />
                <ResponsiveDrawerListItem
                    to="/settings"
                    onClick={goBackeHome}
                    icon={<HelpIcon />}
                    text="設定"
                />
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolBar} variant="dense">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{ display: 'flex' }}>
                        <SportsSoccerIcon className={classes.soccerIcon} />
                        <h3 >BARsprt.</h3>
                    </div>
                    <IconButton
                        color="inherit"
                        aria-label="Open Share"
                        className={classes.shareButton}
                    >
                        <Typography variant="button" color="inherit" noWrap>
                            <ShareIcon onClick={shareDialogToggle} />
                            <ShareDialog
                                open={shareDialogOpen}
                                onClose={shareDialogToggle}
                            />
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {/* <nav className={classes.drawer} aria-label="mailbox folders"> */}
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden mdUp implementation="css" >
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
            {/* </nav> */}
            <main className={classes.content}>
                {props.children}
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default ResponsiveDrawer