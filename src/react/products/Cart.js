import React from "react";
import {Box, Container, ListItemAvatar, ListItemText, Table, TableBody, TableRow} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import {Add, Remove} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    table: {
        minWidth: 650,
    },
    cellWidth: {
        width: "50px"
    },
}));

export default ({products, onClickAddProduct, onClickRemoveProduct}) => {

    const classes = useStyles();
    let totalSum = products.reduce((a, {price}) => a + price, 0);

    function getCountOfProduct(id) {
        let count = 0;

        for (const item of products) {
            if (item.id === id) count++;
        }

        return count;
    }

    return (
        <Container component="main" maxWidth="lg" style={{marginTop: 100}}>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {products
                        .filter((item, index, arr) => arr.indexOf(item) === index)
                        .map((item) => (
                            <TableRow key={item.id}>

                                <TableCell className={classes.cellWidth}>
                                    <ListItemAvatar>
                                        <Avatar src={item.image}/>
                                    </ListItemAvatar>
                                </TableCell>

                                <TableCell align="left">
                                    <ListItemText primary={item.name}/>
                                </TableCell>

                                <TableCell align="right">
                                    <IconButton onClick={() => onClickRemoveProduct(item)}>
                                        <Remove/>
                                    </IconButton>
                                </TableCell>

                                <TableCell align="center">
                                    <ListItemText primary={getCountOfProduct(item.id)}/>
                                </TableCell>

                                <TableCell align="left">
                                    <IconButton onClick={() => onClickAddProduct(item)}>
                                        <Add/>
                                    </IconButton>
                                </TableCell>

                                <TableCell className={classes.cellWidth}>
                                    <ListItemText primary={item.price}/>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>

            <Box display="flex" mt={6} flexDirection="row-reverse">
                <Typography variant="h4">
                    Total sum: {totalSum.toFixed(2)}
                </Typography>
            </Box>
        </Container>
    );
}

// функция withStyles() прокидывает стили (styles) в пропсы класса Cart
// export default withStyles(styles)(Cart)