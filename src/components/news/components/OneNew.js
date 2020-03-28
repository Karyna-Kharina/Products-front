import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Link} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

export const useStyles = makeStyles(theme => ({
    card: {
        width: "2",
        margin: "2%",
        border: theme.palette.primary.light
    },
    content: {
        textAlign: "left",
        overflowWrap: "break-word"
    },
    divider: {
        margin: '1%',
        backgroundColor: theme.palette.primary.light
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

export default ({oneNew}) => {

    const classes = useStyles();
    const {source, author, title, description, url, urlToImage, publishedAt, content} = oneNew;

    return (
        <Box border={1} p={5} className={classes.content}>
            <Typography
                variant={"subtitle1"}
                color="secondary"
            >
                {source.name}
            </Typography>

            <Divider className={classes.divider}/>

            <Typography
                variant={"h6"}
                color="primary"
            >
                {author}
            </Typography>

            <Divider className={classes.divider}/>

            <Typography
                variant={"h4"}
                color="inherit"
            >
                {title}
            </Typography>

            <Divider className={classes.divider}/>

            <Typography
                variant={"subtitle2"}
                color="inherit"
            >
                {description}
            </Typography>

            <Divider className={classes.divider}/>

            <Link
                variant={"subtitle2"}
                color="secondary"
                href={url}
            >
                {url}
            </Link>

            <Divider className={classes.divider}/>

            <CardMedia
                className={classes.media}
                image={urlToImage}
            />

            <Divider className={classes.divider}/>

            <Typography
                variant={"subtitle2"}
                color="primary"
            >
                {publishedAt}
            </Typography>

            <Divider className={classes.divider}/>

            <Typography
                variant={"subtitle1"}
                color="inherit"
            >
                {content}
            </Typography>
        </Box>
    );
}