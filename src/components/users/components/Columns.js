import React from "react";
import {Input} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {
    isValidEmail,
    isValidImageUrl,
    isValidName,
    isValidPassword,
    isValidPhoneNumber
} from "../../../additionalData/validation";

export const columns = [
    {
        title: 'ID',
        field: 'id',
        type: 'numeric',
        width: 2,
        render: rowData => <Typography>{rowData.id}</Typography>,
        editComponent: (props) => (
            <Input
                disabled
                value={props.rowData.id}
                placeholder={props.columnDef.title}
                onChange={e => props.onChange(e.target.value)}
            />
        )
    },
    {
        title: 'Avatar',
        field: 'photo',
        filtering: false,
        emptyValue: "",
        render: rowData => <Avatar src={rowData.photo}/>,
        editComponent: (props) => (
            <Input
                value={props.rowData.photo}
                placeholder={props.columnDef.title}
                error={!isValidImageUrl(props.rowData.photo)}
                onChange={e => props.onChange(e.target.value)}
            />
        )
    },
    {
        title: 'First Name',
        field: 'firstName',
        render: rowData => <Typography>{rowData.firstName}</Typography>,
        editComponent: (props) => (
            <Input
                value={props.rowData.firstName}
                placeholder={props.columnDef.title}
                error={!isValidName(props.value)}
                onChange={e => props.onChange(e.target.value)}
            />
        )
    },
    {
        title: 'Last Name',
        field: 'lastName',
        render: rowData => <Typography>{rowData.lastName}</Typography>,
        editComponent: (props) => (
            <Input
                value={props.rowData.lastName}
                placeholder={props.columnDef.title}
                error={!isValidName(props.value)}
                onChange={e => props.onChange(e.target.value)}
            />
        )
    },
    {
        title: 'Birthday',
        field: 'date',
        render: rowData => (<Typography>{rowData.date}</Typography>),
        editComponent: (props) => (
            <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue={props.value}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={e => props.onChange(e.target.value)}
            />
        )
    },
    {
        title: 'Email',
        field: 'email',
        render: rowData => <Typography>{rowData.email}</Typography>,
        editComponent: (props) => (
            <Input
                value={props.rowData.email}
                placeholder={props.columnDef.title}
                error={!isValidEmail(props.value)}
                onChange={e => props.onChange(e.target.value)}
            />
        )
    },
    {
        title: 'Phone Number',
        field: 'phoneNumber',
        render: rowData => <Typography>{rowData.phoneNumber}</Typography>,
        editComponent: (props) => (
            <Input
                value={props.rowData.phoneNumber}
                placeholder={props.columnDef.title}
                error={!isValidPhoneNumber(props.value)}
                onChange={e => props.onChange(e.target.value)}
            />
        )
    },
    {
        title: 'Password',
        field: 'password',
        sorting: false,
        render: () => <Typography>********</Typography>,
        editComponent: (props) => (
            <Input
                type="password"
                value={props.rowData.password}
                placeholder={props.columnDef.title}
                error={!isValidPassword(props.value)}
                onChange={e => props.onChange(e.target.value)}
            />
        )
    },
];
