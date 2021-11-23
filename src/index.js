import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import store from "./store";
import Body from "./containers/app/Body";
import MessageInfo from "./containers/info";

const theme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#334e8b"
        },
        secondary: {
            main: "#d13e45"
        }
    }
});

if (process.env.NODE_ENV === "development") {
    const { worker } = require("./mocks/browser");
    worker.start();
}

render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Provider store={store}>
            <BrowserRouter>
                <Body/>
                <MessageInfo/>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>,
    document.getElementById("root")
);