import React from "react";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import Body from "./containers/app/Body";
import MessageInfo from "./containers/info/MessageInfo";
import {ThemeProvider} from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({

    palette: {
        type: 'dark',
        primary: {
            main: '#334e8b',
        },
        secondary: {
            main: '#d13e45',
        },
    }
});

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
    document.getElementById('root')
);