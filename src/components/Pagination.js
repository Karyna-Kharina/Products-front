import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";

const Pagination = ({ page, totalPages, onClickBack, onClickForward }) => (
    <Box p={5}>
        <Grid style={{ textAlign: "center" }} container spacing={2} alignItems={"center"} justifyContent={"center"}>
            <Grid item xs={12} sm={3}>
                <Button
                    style={{ width: 200 }}
                    variant={"outlined"}
                    color={"secondary"}
                    disabled={page + 1 === 1}
                    onClick={() => onClickBack(page - 1)}
                >
                    Back
                </Button>
            </Grid>

            <Grid item xs={12} sm={2}>
                <Typography variant={"h5"} color={"primary"}>
                    {(page + 1)}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={3}>
                <Button
                    style={{ width: 200 }}
                    variant={"outlined"}
                    color={"secondary"}
                    disabled={page + 1 === totalPages}
                    onClick={() => onClickForward(page + 1)}
                >
                    Forward
                </Button>
            </Grid>
        </Grid>
    </Box>
);

export default Pagination;