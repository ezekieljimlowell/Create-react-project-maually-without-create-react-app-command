import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import App from "./App.js";

const appRouting = (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    </div>
);

const rootNode = document.getElementById("root");

ReactDOM.createRoot(rootNode).render(appRouting);
// ReactDOM.render(<appRouting />, document.getElementById("root"));