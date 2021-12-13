import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";
import { BrowserRouter } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { worker } from "./mocks/browser";
import store from "./store";
import AppBody from "./containers/app/AppBody";
import MessageInfo from "./containers/info";
import { BASE_PATH, BASE_PATH_WITH_TRAILING_SLASH, SERVICE_WORKER_URL } from "./utils/links/front";

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
    if (window.location.pathname === BASE_PATH) {
        window.location.pathname = BASE_PATH_WITH_TRAILING_SLASH;
        return;
    }
    worker.start({
        serviceWorker: {
            url: SERVICE_WORKER_URL
        }
    });

    render(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <CssBaseline/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <BrowserRouter basename={BASE_PATH_WITH_TRAILING_SLASH}>
                        <AppBody/>
                        <MessageInfo/>
                    </BrowserRouter>
                </MuiPickersUtilsProvider>
            </Provider>
        </ThemeProvider>,
        document.getElementById("root")
    );
})();