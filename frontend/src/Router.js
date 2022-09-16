import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";


//import 
import ViewFunds from "./Components/ViewFunds";
import AddAmount from "./Components/AddAmount";

const SiteRoutes = ()=> {
    return (
        <div >
            <Router>
            <Header/>	
                <Routes>
                    <Route exact path="/" element={<ViewFunds/>} />
                    <Route exact path="/addamount" element={<AddAmount/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default SiteRoutes;
