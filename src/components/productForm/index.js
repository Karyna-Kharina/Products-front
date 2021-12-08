import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import UserFormRow from "../userForm/UserFormRow";
import FullWidthButtonSave from "./FullWidthButtonSave";
import { PRODUCTS } from "../../additionalData/links/front";

const ProductForm = ({
                         id, name, isValidName, price, isValidPrice, image, isValidImage,
                         onChangeId, onChangeName, onChangePrice, onChangeImage, onSave
                     }) => {
    const isDisabledButtonSave = () => !(isValidName && isValidPrice && isValidImage);

    return (
        <form noValidate>
            <Container component={"main"} style={{ marginTop: 15 }}>
                <Grid item container justifyContent={"center"} alignItems={"center"} spacing={4} xs={10}>
                    <Grid item xs={12}>
                        <Typography variant={"h2"}>
                            Create a product
                        </Typography>
                    </Grid>

                    <UserFormRow
                        label={"ID"}
                        value={id}
                        disabled={true}
                        isValidData={true}
                        onChangeData={onChangeId}
                    />

                    <UserFormRow
                        label={"Name"}
                        value={name}
                        isValidData={isValidName}
                        onChangeData={onChangeName}
                    />

                    <UserFormRow
                        label={"Price"}
                        type={"number"}
                        value={price}
                        isValidData={isValidPrice}
                        onChangeData={onChangePrice}
                    />

                    <UserFormRow
                        label={"Image"}
                        value={image}
                        isValidData={isValidImage}
                        onChangeData={onChangeImage}
                    />

                    <FullWidthButtonSave
                        id={id}
                        data={{ id, name, price, image }}
                        linkTo={PRODUCTS}
                        isDisabledButtonSave={isDisabledButtonSave}
                        onSave={onSave}
                    />
                </Grid>
            </Container>
        </form>
    );
};

export default ProductForm;