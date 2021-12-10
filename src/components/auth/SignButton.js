import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const SignButton = ({ style, name, isDisabledButton, onClickButton }) => (
    <Button
        fullWidth
        disabled={isDisabledButton()}
        variant={"contained"}
        color={"primary"}
        className={style}
        onClick={onClickButton}
    >
        {name}
    </Button>
);

SignButton.propTypes = {
    style: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isDisabledButton: PropTypes.func.isRequired,
    onClickButton: PropTypes.func.isRequired
};

export default SignButton;