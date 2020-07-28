import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Head from "./Head.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.StrictMode>
        <Head />
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
