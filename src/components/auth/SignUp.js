import React, {Component} from 'react';
import {
    Avatar,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    Typography
} from '@material-ui/core';
import {MuiPickersUtilsProvider,} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {isValidEmail, isValidName, isValidPassword, isValidPhoneNumber} from "./Validation";
import {DateComponent, Email, FirstName, LastName, Password, PhoneNumber} from "./components";
import {withStyles} from '@material-ui/core/styles';
import {styles} from "./AuthStyle";


class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            firstNameValid: true,
            lastName: '',
            lastNameValid: true,
            email: '',
            emailValid: true,
            phoneNumber: '',
            phoneNumberValid: true,
            password: '',
            passwordValid: true,
            isCheckedBox: false,
            selectedDate: new Date()
        }
    }

    onChangeFirstName(firstName) {
        console.log("onChangeFirstName()", firstName);
        this.setState({firstName: firstName, firstNameValid: isValidName(firstName)});
    }

    onChangeLastName(lastName) {
        console.log("onChangeLastName()", lastName);
        this.setState({lastName: lastName, lastNameValid: isValidName(lastName)});
    }

    onChangeEmail(email) {
        console.log("onChangeEmail()", email);
        this.setState({email: email, emailValid: isValidEmail(email)});
    }

    onChangeDate(date) {
        console.log("onChangeDate()", date);
        this.setState({selectedDate: date});
    };

    onChangePhone(phone) {
        console.log("onChangePhone()", phone);
        this.setState({phoneNumber: phone, phoneNumberValid: isValidPhoneNumber(phone)});
    }

    onChangePassword(password) {
        console.log("onChangePassword()", password);
        this.setState({password: password, passwordValid: isValidPassword(password)});
    }

    onChangeCheckbox(checkbox) {
        console.log("onChangeCheckbox()", checkbox);
        this.setState({checkedBox: checkbox});
    }

    getState() {
        console.log(this.state);
    }

    render() {

        const {classes} = this.props;
        const {firstName, lastName, email, phoneNumber, password, checkedBox} = this.state;

        const {
            selectedDate,
            firstNameValid,
            lastNameValid,
            emailValid,
            phoneNumberValid,
            passwordValid,
        } = this.state;

        const isDisabledButton = () => {

            const res = !(
                isValidName(firstName)
                && isValidName(lastName)
                && isValidEmail(email)
                && isValidPhoneNumber(phoneNumber)
                && isValidPassword(password)
                && checkedBox
            );

            console.log("RESULT: ", res);
            return res;
        };

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>

                <div className={classes.paper}>

                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>

                    <form className={classes.form} noValidate>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <FirstName
                                    firstName={firstName}
                                    firstNameValid={firstNameValid}
                                    onChangeFirstName={(e) => this.onChangeFirstName(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <LastName
                                    lastName={lastName}
                                    lastNameValid={lastNameValid}
                                    onChangeLastName={(e) => this.onChangeLastName(e.target.value)}
                                />
                            </Grid>

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <DateComponent
                                        selectedDate={selectedDate}
                                        onChangeDate={(e) => this.onChangeDate(e)}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>

                            <Grid item xs={12}>
                                <Email
                                    emailValid={emailValid}
                                    email={email}
                                    onChangeEmail={(e) => this.onChangeEmail(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <PhoneNumber
                                    phoneNumber={phoneNumber}
                                    phoneNumberValid={phoneNumberValid}
                                    onChangePhone={(e) => this.onChangePhone(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Password
                                    password={password}
                                    passwordValid={passwordValid}
                                    onChangePassword={(e) => this.onChangePassword(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={(e) => this.onChangeCheckbox(e.target.checked)}
                                            color="primary"
                                        />
                                    }
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>

                        <Button
                            fullWidth
                            disabled={isDisabledButton()}
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => this.getState()}
                        >
                            Sign Up
                        </Button>

                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>

                    </form>
                </div>
            </Container>
        );
    }
}

export default withStyles(styles)(SignUp)