import React from 'react';
import ReactDom from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#eeeeee',
        textAlign: 'left',
        padding: '5px 15px',
        borderRadius: '20px',
        fontSize: '18px',
        margin: '5px',
    },
    user: {
        backgroundColor: '#b3e5fc',
        textAlign: 'right',
        padding: '5px 15px',
        borderRadius: '20px',
        fontSize: '18px',
        margin: '5px',
    }
});

const Sender = (props) => {
    let { sender, text } = props;
    const classes = useStyles();
    let color = sender === null ? classes.root : classes.user
    return (
        <div className={color}>
            { sender && <strong>{sender}</strong> }
            { !sender && <strong>Bot</strong> }
            <Typography>{ props.sender  || (!props.sender && text) ? text : 'Please wait...' }</Typography>
        </div>
    )
};

export default Sender