import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default ({message, handleClose}) => {

    const classes = useStyles();
    const {type, text} = message || {};

    const onClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        handleClose();
    };

    return (
        <>
            {message && (
                <div className={classes.root}>
                    <Snackbar open autoHideDuration={6000} onClose={onClose}>
                        <Alert onClose={onClose} severity={type}>
                            {text}
                        </Alert>
                    </Snackbar>
                </div>
            )}
        </>
    );
}