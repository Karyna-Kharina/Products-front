import React, {Component} from "react";
import {Container, Grid, TextField} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {styles} from "./SignUp";
import {isValidEmail, isValidPassword} from "./Validation";


class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            emailValid: true,
            password: '',
            passwordValid: true
        }
    }

    onChangeEmail(email) {
        console.log("onChangeEmail()", email);
        this.setState({email: email, emailValid: isValidEmail(email)});
    }

    onChangePassword(password) {
        console.log("onChangePassword()", password);
        this.setState({password: password, passwordValid: isValidPassword(password)});
    }

    getState() {
        console.log(this.state);
    }

    render() {

        const {classes} = this.props;
        const {email, emailValid, password, passwordValid} = this.state;

        const isDisabledButton = () => {
            return !(isValidEmail(email) && isValidPassword(password));
        };

        return (
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>

                    <Avatar className={classes.avatar}>
                        <LockOpenIcon/>
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>

                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="email"
                                    name="email"
                                    id="email"
                                    label="Email Address"
                                    required    // Email *
                                    fullWidth
                                    autoFocus
                                    variant="outlined"
                                    error={!emailValid}
                                    onChange={(e) => this.onChangeEmail(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="password"
                                    name="password"
                                    id="password"
                                    label="Password"
                                    required
                                    fullWidth
                                    autoFocus
                                    variant="outlined"
                                    error={!passwordValid}
                                    onChange={(e) => this.onChangePassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </form>

                    <Button
                        fullWidth
                        disabled={isDisabledButton()}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => this.getState()}
                    >
                        LogIn
                    </Button>

                </div>
            </Container>
        )
    }
}

export default withStyles(styles)(SignIn)