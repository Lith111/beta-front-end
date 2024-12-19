import ReactDom from "react-dom/client";
import App from "./App"
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import store from "./redux/store";
import {Provider} from "react-redux"
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);