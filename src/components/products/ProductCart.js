import React from "react";
import {
    Avatar,
    Box,
    Container,
    IconButton,
    ListItemAvatar,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    cellWidth: {
        width: "50px"
    }
});

const ProductCart = ({ products, onClickAddProduct, onClickRemoveProduct }) => {
    const classes = useStyles();
    let totalSum = products.reduce((a, { price }) => a + parseFloat(price), 0);

    function getCountOfProduct(id) {
        let count = 0;

        for (const item of products) {
            if (item.id === id) count++;
        }

        return count;
    }

    return (
        <Container component={"main"} maxWidth={"lg"} style={{ marginTop: 100 }}>
            <Table className={classes.table} aria-label={"simple table"}>
                <TableBody>
                    {
                        products
                            .filter((item, index, arr) => arr.indexOf(item) === index)
                            .map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell className={classes.cellWidth}>
                                            <ListItemAvatar>
                                                <Avatar src={item.image}/>
                                            </ListItemAvatar>
                                        </TableCell>

                                        <TableCell align={"left"}>
                                            <ListItemText primary={item.name}/>
                                        </TableCell>

                                        <TableCell align={"right"}>
                                            <IconButton onClick={() => onClickRemoveProduct(item)}>
                                                <Remove/>
                                            </IconButton>
                                        </TableCell>

                                        <TableCell align={"center"}>
                                            <ListItemText primary={getCountOfProduct(item.id)}/>
                                        </TableCell>

                                        <TableCell align={"left"}>
                                            <IconButton onClick={() => onClickAddProduct(item)}>
                                                <Add/>
                                            </IconButton>
                                        </TableCell>

                                        <TableCell className={classes.cellWidth}>
                                            <ListItemText primary={item.price}/>
                                        </TableCell>
                                    </TableRow>
                                )
                            )
                    }
                </TableBody>
            </Table>

            <Box display={"flex"} mt={6} flexDirection={"row-reverse"}>
                <Typography variant={"h4"}>
                    Total sum: {totalSum.toFixed(2)}
                </Typography>
            </Box>
        </Container>
    );
};

export default ProductCart;