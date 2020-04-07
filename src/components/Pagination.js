import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";

export default ({page, totalPages, onClickBack, onClickForward}) => {

    return (
        <Box p={5}>
            <Grid style={{textAlign: "center"}}
                container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12} sm={3}>
                    <Button
                        style={{width: 200}}
                        variant='outlined'
                        color='secondary'
                        disabled={page + 1 === 1}
                        onClick={() => onClickBack(page - 1)}
                    >
                        Back
                    </Button>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Typography variant="h5" color="primary">
                        {(page + 1)}
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Button
                        style={{width: 200}}
                        variant='outlined'
                        color='secondary'
                        disabled={page + 1 === totalPages}
                        onClick={() => onClickForward(page + 1)}
                    >
                        Forward
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}