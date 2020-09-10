import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 70
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center"
    },
    info: {
        marginTop: 20
    },
    pos: {
        marginBottom: 12,
    },
});



const AppInfo = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    BARsprt.(バルサポ)について
                </Typography>
                <Typography variant="body2" component="p" className={classes.info}>
                    このアプリはFCバルセロナのファンに向けたアプリです。
                <br />
                    FCバルセロナに関する最新のニュースや動画を見ることができます。
                    さらに、匿名でチャットも行えます。ファン同士で様々な意見を共有してみましょう！
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}
export default AppInfo;