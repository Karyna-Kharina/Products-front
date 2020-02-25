import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import {Box} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 250,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        paddingTop: "50%"
    },
    content: {
        textAlign: "left",
        padding: "6%"
    },
    divider: {
        margin: '5%',
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    },
    avatar: {
        display: "inline-block",
        border: "2px solid white"
    },
    root: {
        maxWidth: 345,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

export default ({product, onClickAddProduct}) => {

    const classes = useStyles();
    const {name, price, image} = product;

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={image}
            />

            <CardContent>
                <Typography
                    className={classes.content}
                    variant={"h6"}
                    gutterBottom
                >
                    {name}
                </Typography>

                <Box display="flex" alignItems="center">
                    <Box flexGrow={1} bgcolor="darkgreen">
                        <Typography
                            className={classes.content}
                            variant={"h5"}
                        >
                            {price}
                        </Typography>
                    </Box>

                    <Box>
                        <IconButton onClick={onClickAddProduct}>
                            <AddShoppingCart/>
                        </IconButton>
                    </Box>
                </Box>

                <Divider className={classes.divider} light/>
            </CardContent>
        </Card>
    );
}