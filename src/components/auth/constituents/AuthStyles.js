const AuthStyles = (theme) => ({
    paper: {
        marginTop: theme.spacing(10),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.primary.light
    },
    grid: {
        width: "100%",
        marginTop: theme.spacing(5)
    },
    submit: {
        margin: theme.spacing(6, 0, 3)
    }
});

export default AuthStyles;