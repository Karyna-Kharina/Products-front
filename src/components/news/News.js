import React from "react";
import key from 'weak-key';
import OneNew from "./components/OneNew";
import {Container, Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import SelectCountry from "./components/SelectCountry";
import TextField from "@material-ui/core/TextField";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 390,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 5, 2),
    },
    inputForm: {
        width: 300
    }
}));

export default ({newsList, country, pageSize, onChooseCountry, onChangePageSize, onClickApply}) => {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const isDisabledButtonApply = () => {
        return !(country && pageSize > 0);
    };

    return (
        <Container>
            <Box mb={3}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Button
                        color="secondary"
                        size="large"
                        variant="contained"
                        onClick={handleOpen}
                    >
                        GET CERTAIN NEWS
                    </Button>
                </Grid>
            </Box>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">
                        Search of News
                    </h2>

                    <Box mb={2}>
                        <SelectCountry
                            country={country}
                            onChooseCountry={(country) => onChooseCountry(country)}
                        />
                    </Box>

                    <Box mb={4}>
                        <TextField
                            id="outlined-basic"
                            label="Enter the page size"
                            variant="outlined"
                            value={pageSize}
                            type="number"
                            className={classes.inputForm}
                            onChange={(e) => onChangePageSize(e.target.value)}
                        />
                    </Box>

                    <Grid container>
                        <Grid item xs={12} sm={9}>
                            <Button
                                size="medium"
                                color="inherit"
                                variant="contained"
                                onClick={handleClose}
                            >
                                CANCEL
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <Button
                                size="medium"
                                color="primary"
                                variant="contained"
                                disabled={isDisabledButtonApply()}
                                onClick={(e) => onClickApply(e.target) && handleClose()}
                            >
                                APPLY
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Modal>

            <Grid container spacing={5} p={5}>
                {
                    newsList ?
                        newsList
                            .map(item => (
                                <Grid key={key(item)} item sm={12}>
                                    <OneNew
                                        oneNew={item}
                                    />
                                </Grid>
                            ))
                        :
                        ''
                }
            </Grid>
        </Container>
    )
}