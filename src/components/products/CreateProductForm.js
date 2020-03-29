import React from "react";
import Button from "@material-ui/core/Button";
import Save from "@material-ui/icons/Save";
import Update from "@material-ui/icons/Update";
import {Container, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default ({id, name, price, image, onChangeId, onChangeName, onChangePrice, onChangeImage, onCreate}) => {

    const isDisabledButtonSave = () => {
        return !(name.length > 0 && price > 0);
    };

    return (

        <form noValidate>
            <Container component="main" style={{marginTop: 15}}>
                <Grid item container justify="center" alignItems="center" spacing={4} xs={10}>
                    <Grid item xs={12}>
                        <Typography variant="h2">
                            Product Creating
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="margin-normal"
                            label="ID"
                            size="medium"
                            variant="outlined"
                            disabled
                            value={id}
                            onChange={(e) => onChangeId(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="margin-normal"
                            label="Name"
                            size="medium"
                            variant="outlined"
                            type="text"
                            value={name}
                            onChange={(e) => onChangeName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="margin-normal"
                            label="Price"
                            size="medium"
                            variant="outlined"
                            type="number"
                            value={price}
                            onChange={(e) => onChangePrice(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="margin-normal"
                            label="Image"
                            size="medium"
                            variant="outlined"
                            type="text"
                            value={image}
                            onChange={(e) => onChangeImage(e.target.value)}
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
                            onClick={() => onCreate({id, name, price, image})}
                        >
                            {id ? "UPDATE" : "SAVE"}
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </form>
    )
}