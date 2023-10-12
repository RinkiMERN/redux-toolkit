import React from "react";
import App from "./App";
import "./index.css"
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./features/store";

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(
    <Provider store={store}>
        <App/>
    </Provider>
)