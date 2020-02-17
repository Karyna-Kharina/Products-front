import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Save from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import {Box} from "@material-ui/core";

export default class CreateForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            name: "",
            price: "",
            ...(props.product || {})
        }
    }

    onChangeId(id) {

        console.log("onChangeId()", id);
        this.setState({id: id});
    }

    onChangeName(name) {

        console.log("onChangeName()", name);
        this.setState({name: name});
    }

    onChangePrice(price) {

        console.log("onChangePrice()", price);
        this.setState({price: price});
    }

    onSaveClick() {

        console.log("onCreateClick()");

        const {id, name, price} = this.state;
        const newItem = {id, name, price};
        this.props.onCreate(newItem);
    }

    render() {

        const {id, name, price} = this.state;
        return (
            <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                mt={4}
                mb={4}
            >
                <Box mr={4}>
                    <TextField
                        id="margin-normal"
                        label="ID"
                        size="small"
                        variant="outlined"
                        type="number"
                        value={id}
                        onChange={(e) => this.onChangeId(e.target.value)}
                    />

                </Box>
                <Box mr={4}>
                    <TextField
                        id="margin-normal"
                        label="Name"
                        size="small"
                        variant="outlined"
                        type="text"
                        value={name}
                        onChange={(e) => this.onChangeName(e.target.value)}
                    />

                </Box>
                <Box mr={4}>
                    <TextField
                        id="margin-normal"
                        label="Price"
                        size="small"
                        variant="outlined"
                        type="number"
                        value={price}
                        onChange={(e) => this.onChangePrice(e.target.value)}
                    />

                </Box>
                <Box mr={4}>
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        startIcon={<Save/>}
                        onClick={() => this.onSaveClick()}
                    >
                        SAVE
                    </Button>
                </Box>
            </Box>
        )
    }
}