import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import CssBaseline from '@material-ui/core/CssBaseline';

const ColorLinearProgress = withStyles({
    colorPrimary: {
        backgroundColor: '#b2dfdb'
    },
    barColorPrimary: {
        backgroundColor: '#00695c'
    },
    
})(LinearProgress);

const BorderLinearProgress = withStyles({
    root: {
        height: 10,
        backgroundColor: lighten('#ff6c5c', 0.5)
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#ff6c5c'
    }
})(LinearProgress);

// Inspired by the Facebook spinners.
const useStylesFacebook = makeStyles({
    root: {
        position: 'relative'
    },
    top: {
        color: '#eef3fd'
    },
    bottom: {
        color: '#6798e5',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0
    }
});

function FacebookProgress(props) {
    const classes = useStylesFacebook();

    return (
        <div className={classes.root}>
            <CircularProgress
                variant="determinate"
                value={100}
                className={classes.top}
                size={24}
                thickness={4}
                {...props}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.bottom}
                size={24}
                thickness={4}
                {...props}
            />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    margin: {
        marginBottom: theme.spacing(1),
    },
    root: {
        border: '1px solid red',        
    }
}));

export default function CustomizedProgressBars() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <ColorLinearProgress
                    className={classes.margin} 
                    variant="indeterminate"
                />
                <ColorCircularProgress size={30} thickness={5} />
                
            </div>
        </React.Fragment>
    );
}
