import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import store from "./store";
import { worker } from "./mocks/browser";
import Body from "./containers/app/Body";
import MessageInfo from "./containers/info";

const theme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#334e8b",
            light: "#76c7da"
        },
        secondary: {
            main: "#d13e45"
        }
    }
});

(function () {
    if (window.location.pathname === "/Products-front") {
        window.location.pathname = "/Products-front/";
        return;
    }
    worker.start({
        serviceWorker: {
            url: "/Products-front/mockServiceWorker.js"
        }
    });

    render(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <BrowserRouter basename={"/Products-front/"}>
                    <Body/>
                    <MessageInfo/>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>,
        document.getElementById("root")
    );
})();