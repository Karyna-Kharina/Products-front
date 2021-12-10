import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Toolbar, Typography } from "@material-ui/core";
import TextFieldComponent from "../TextFieldComponent";
import ButtonSaveUpdate from "../ButtonSaveUpdate";
import { PRODUCTS } from "../../additionalData/links/front";

const ProductForm = ({
                         id, name, isValidName, price, isValidPrice, image, isValidImage,
                         onChangeId, onChangeName, onChangePrice, onChangeImage, onSave
                     }) => {
    const isDisabledButtonSave = () => !(isValidName && isValidPrice && isValidImage);

    return (
        <Container>
            <Toolbar/>

            <Grid item container justifyContent={"center"} alignItems={"center"} spacing={4} xs={10}>
                <Grid item xs={12}>
                    <Typography variant={"h2"}>
                        Create a product
                    </Typography>
                </Grid>

                {
                    id && (
                        <TextFieldComponent
                            label={"ID"}
                            value={id}
                            disabled={true}
                            isValidData={true}
                            onChangeData={onChangeId}
                        />
                    )
                }

                <TextFieldComponent
                    label={"Name"}
                    value={name}
                    isValidData={isValidName}
                    onChangeData={onChangeName}
                />

                <TextFieldComponent
                    label={"Price"}
                    type={"number"}
                    value={price}
                    isValidData={isValidPrice}
                    onChangeData={onChangePrice}
                />

                <TextFieldComponent
                    label={"Image URL"}
                    value={image}
                    isValidData={isValidImage}
                    onChangeData={onChangeImage}
                />

                <ButtonSaveUpdate
                    id={id}
                    linkTo={PRODUCTS}
                    isDisabledButtonSave={isDisabledButtonSave}
                    onSave={() => onSave({ id, name, price, image })}
                />
            </Grid>
        </Container>
    );
};

ProductForm.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isValidName: PropTypes.bool.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isValidPrice: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    isValidImage: PropTypes.bool.isRequired,
    onChangeId: PropTypes.func.isRequired,
    onChangeName: PropTypes.func.isRequired,
    onChangePrice: PropTypes.func.isRequired,
    onChangeImage: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default ProductForm;