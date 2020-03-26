import React from "react";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import Body from "./containers/Body";

render(
    <Provider store={store}>
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);