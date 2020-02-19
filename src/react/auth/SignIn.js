import React, {Component} from "react";
import {Container, Grid} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {styles} from "./SignUp";
import {isValidEmail, isValidPassword} from "./Validation";
import Email from "./components/Email";
import Password from "./components/Password";


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
                                <Email
                                    email={email}
                                    emailValid={emailValid}
                                    onChangeEmail={(e) => this.onChangeEmail(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Password
                                    password={password}
                                    passwordValid={passwordValid}
                                    onChangePassword={(e) => this.onChangePassword(e.target.value)}
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