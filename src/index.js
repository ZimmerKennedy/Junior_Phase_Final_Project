import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store/index"
import { BrowserRouter as Router } from "react-router-dom";
/* Import and destructure main from src/component/index.js 
and anything else you may need here */


const container = document.getElementById("root")
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)
