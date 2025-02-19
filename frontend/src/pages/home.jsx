import React from "react";
//components
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import TruckTable from "../components/tables/TruckTable";

const Home = (props) => {
    return (
        <div className="row">
            <div className="col-2">
                <Sidebar />
            </div>
            <div className="col">
                <Dashboard />
            </div>
        </div >
    );
}

export default Home;