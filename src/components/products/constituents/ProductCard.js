import React from "react";
import Card from "@material-ui/core/Card";
import { Box, CardContent, CardMedia, Divider, IconButton, Typography } from "@material-ui/core";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 250,
        maxHeight: 290,
        margin: "5",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        paddingTop: "70%"
    },
    content: {
        textAlign: "left",
        padding: "1%"
    },
    divider: {
        margin: "2%",
        backgroundColor: theme.palette.error.light
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
        maxWidth: 345
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    }
}));

const ProductCard = ({ product, onClickAddProduct }) => {
    const classes = useStyles();
    const { name, price, image } = product;

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

                <Divider className={classes.divider} light/>

                <Box display={"flex"} alignItems={"center"}>
                    <Box flexGrow={1} bgcolor={"#"}>
                        <Typography
                            className={classes.content}
                            variant={"h5"}
                            color={"error"}
                        >
                            {price % 1 > 0 ? price : price + ".0"}
                        </Typography>
                    </Box>

                    <Box>
                        <IconButton onClick={onClickAddProduct}>
                            <AddShoppingCart/>
                        </IconButton>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductCard;