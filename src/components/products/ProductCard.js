import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import { Box, CardContent, CardMedia, Divider, IconButton, Typography } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { getFloatingPointAmount } from "../../utils/methods";

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 250,
        maxHeight: 290,
        "&:hover": {
            border: "1px solid #8aabf2"
        }
    },
    media: {
        paddingTop: "70%"
    },
    content: {
        textAlign: "left",
        paddingLeft: 15
    },
    divider: {
        margin: "2%",
        backgroundColor: theme.palette.error.light
    }
}));

const ProductCard = ({ product, onAddProduct }) => {
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

                <Divider className={classes.divider}/>

                <Box display={"flex"} alignItems={"center"}>
                    <Box flexGrow={1}>
                        <Typography
                            className={classes.content}
                            variant={"h5"}
                            color={"error"}
                        >
                            {getFloatingPointAmount(price)}
                        </Typography>
                    </Box>

                    <Box>
                        <IconButton onClick={onAddProduct}>
                            <AddShoppingCart/>
                        </IconButton>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        image: PropTypes.string.isRequired
    }).isRequired,
    onAddProduct: PropTypes.func.isRequired
};

export default ProductCard;