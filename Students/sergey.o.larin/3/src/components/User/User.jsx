import React from 'react';
import ReactDom from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        textAlign: 'left',
        padding: '5px 15px',
        margin: '5px',
        fontWeight: '600'
    },
});

const User = (props) => {
    let { user } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {user}
        </div>
    )
};

export default User