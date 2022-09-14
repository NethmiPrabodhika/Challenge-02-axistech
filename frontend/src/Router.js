import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewFunds from "./Components/ViewFunds";
import Header from "./Layout/Header";

const SiteRoutes = ()=> {
    return (
        <div >
            <Router>
            <Header/>	
                <Routes>
                    <Route exact path="/" element={<ViewFunds/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default SiteRoutes;
