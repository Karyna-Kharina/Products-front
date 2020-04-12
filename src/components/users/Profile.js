import React from "react";
import {Container, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import {EMPTY_AVATAR} from "../../additionalData/links/front";

const useStyles = makeStyles({
    root: {
        marginTop: 100
    },
    media: {
        paddingTop: '70%',
    },
});

export default ({firstName, lastName, date, phoneNumber, email, photo}) => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="lg" className={classes.root}>
            <Grid container spacing={10}>
                <Grid item xs={5}>
                    <CardMedia
                        className={classes.media}
                        image={photo ? photo : EMPTY_AVATAR}
                    />
                </Grid>

                <Grid item container xs={7} spacing={2}>
                    <Grid item xs={12}>
                        <Typography
                            variant={"h1"}
                            color="primary"
                        >
                            {firstName}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                            variant={"h1"}
                            color="primary"
                        >
                            {lastName}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container style={{marginLeft: 5}}>
                    <Grid container spacing={5} style={{marginTop: 5}}>
                        <Grid item xs={12} sm={5}>
                            <Typography
                                variant={"h3"}
                                color="inherit"
                            >
                                Birthday:
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={5}>
                            <Typography
                                variant={"h3"}
                                color="secondary"
                            >
                                {date}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={5}>
                            <Typography
                                variant={"h3"}
                                color="inherit"
                            >
                                Phone:
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={5}>
                            <Typography
                                variant={"h3"}
                                color="secondary"
                            >
                                {phoneNumber}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={5}>
                            <Typography
                                variant={"h3"}
                                color="inherit"
                            >
                                Email:
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={5}>
                            <Typography
                                variant={"h3"}
                                color="secondary"
                            >
                                {email}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}