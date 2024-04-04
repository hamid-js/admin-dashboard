import React from "react";
import "./MainDashbord.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function MainDashbord() {
    let router = useRoutes(routes);

    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />
                {router}
            </div>
        </>
    );
}
