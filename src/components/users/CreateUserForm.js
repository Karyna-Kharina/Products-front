import React from "react";
import {Container, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Update from "@material-ui/icons/Update";
import Save from "@material-ui/icons/Save";

export default ({
                    id, onChangeId,
                    firstName, isValidFirstName, onChangeFirstName,
                    lastName, isValidLastName, onChangeLastName,
                    email, isValidEmail, onChangeEmail,
                    phoneNumber, isValidPhoneNumber, onChangePhoneNumber,
                    photo, isValidPhoto, onChangePhoto,
                    password, isValidPassword, onChangePassword,
                    onCreate
                }) => {

    const isDisabledButtonSave = () => {
        return !(
            isValidFirstName &&
            isValidLastName &&
            isValidEmail &&
            isValidPhoneNumber &&
            isValidPhoto &&
            isValidPassword
        );
    };

    return (

        <form noValidate>
            <Container component="main" style={{marginTop: 15}}>
                <Grid item container justify="center" alignItems="center" spacing={4} xs={10}>
                    <Grid item xs={12}>
                        <Typography variant="h2">
                            User Creating
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            disabled
                            id="margin-normal"
                            label="ID"
                            size="medium"
                            variant="outlined"
                            value={id}
                            onChange={(e) => onChangeId(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="margin-normal"
                            label="First Name"
                            size="medium"
                            variant="outlined"
                            type="text"
                            value={firstName}
                            error={!isValidFirstName}
                            onChange={(e) => onChangeFirstName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="margin-normal"
                            label="Last Name"
                            size="medium"
                            variant="outlined"
                            type="text"
                            value={lastName}
                            error={!isValidLastName}
                            onChange={(e) => onChangeLastName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="margin-normal"
                            label="Phone Number"
                            size="medium"
                            variant="outlined"
                            type="text"
                            value={phoneNumber}
                            error={!isValidPhoneNumber}
                            onChange={(e) => onChangePhoneNumber(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="margin-normal"
                            label="Email"
                            size="medium"
                            variant="outlined"
                            type="text"
                            value={email}
                            error={!isValidEmail}
                            onChange={(e) => onChangeEmail(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="margin-normal"
                            label="Photo"
                            size="medium"
                            variant="outlined"
                            type="text"
                            value={photo}
                            error={!isValidPhoto}
                            onChange={(e) => onChangePhoto(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="margin-normal"
                            label="Password"
                            size="medium"
                            variant="outlined"
                            type="password"
                            value={password}
                            error={!isValidPassword}
                            onChange={(e) => onChangePassword(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            size="large"
                            color="primary"
                            variant="contained"
                            disabled={isDisabledButtonSave()}
                            startIcon={id ? <Update/> : <Save/>}
                            onClick={() => onCreate({id, firstName, lastName, phoneNumber, email, photo, password})}
                        >
                            {id ? "UPDATE" : "SAVE"}
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </form>
    )
}