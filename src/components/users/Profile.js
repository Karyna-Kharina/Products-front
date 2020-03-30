import React from "react";
import {Container, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 100
    },
    media: {
        paddingTop: '70%',
    },
}));

export default ({firstName, lastName, phoneNumber, email, photo}) => {

    const classes = useStyles();

    console.log(photo);

    return (
        <Container component="main" maxWidth="lg" className={classes.root}>
            <Grid container spacing={10}>
                <Grid item xs={5}>
                    <CardMedia
                        className={classes.media}
                        image={photo}
                    />
                </Grid>

                <Grid item container xs={7}>
                    <Grid item xs={6}>
                        <Typography
                            variant={"h2"}
                            color="primary"
                        >
                            {firstName}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                            variant={"h2"}
                            color="primary"
                        >
                            {lastName}
                        </Typography>
                    </Grid>

                    <Divider/>
                    <Grid item xs={12}>
                        <Typography
                            variant={"h5"}
                            color="secondary"
                        >
                            {phoneNumber}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                            variant={"h5"}
                            color="initial"
                        >
                            {email}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}