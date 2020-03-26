import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    card: {
        width: "2",
        margin: "2%",
        border: theme.palette.primary.light
    },
    content: {
        textAlign: "left",
    },
    divider: {
        margin: '1%',
        backgroundColor: theme.palette.primary.light
    },
}));

export default ({oneNew}) => {

    const classes = useStyles();
    const {sourceName, author, title, description, url, urlToImage, publishedAt, content} = oneNew;

    return (
        <Box border={1} p={5}>
            <Typography
                className={classes.content}
                variant={"subtitle1"}
                color="secondary"
            >
                {sourceName}
            </Typography>

            <Divider className={classes.divider}/>

            <Typography
                className={classes.content}
                variant={"h6"}
                color="primary"
            >
                {author}
            </Typography>

            <Divider className={classes.divider}/>

            <Typography
                className={classes.content}
                variant={"h6"}
                color="inherit"
            >
                {title}
            </Typography>

            <Divider className={classes.divider}/>

            <Typography
                className={classes.content}
                variant={"subtitle2"}
                color="inherit"
            >
                {description}
            </Typography>

            <Divider className={classes.divider}/>

            <Typography
                className={classes.content}
                variant={"subtitle2"}
                color="secondary"
            >
                {url}
            </Typography>

            <Divider className={classes.divider}/>

            <Typography
                className={classes.content}
                variant={"subtitle2"}
                color="secondary"
                noWrap
            >
                {urlToImage}
            </Typography>

            <Divider className={classes.divider}/>

            <Typography
                className={classes.content}
                variant={"subtitle2"}
                color="primary"
            >
                {publishedAt}
            </Typography>

            <Divider className={classes.divider}/>

            <Typography
                className={classes.content}
                variant={"subtitle1"}
                color="inherit"
            >
                {content}
            </Typography>
        </Box>
    );
}