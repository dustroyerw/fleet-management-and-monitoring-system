import React, { useEffect, useState } from "react";
import CardComponent from "./widgets/Card";

//first complex component
const Dashboard = (props) => {
    return (
        //notifications
        //update using js, also, insert icons
        //update to compartmentalize css
        <div className="p-4">
            <div className="row border-bottom pb-3 mb-4">
                <div className="col-7" style={{ marginRight: '5%' }}>
                    <h1 style={{ marginTop: '10%' }}>Dashboard</h1>
                </div>
                <div className="col-2 p-4" style={{ borderStyle: 'solid', borderRadius: '5px', borderColor: '#D4D4D4', marginRight: '1%' }}>
                    <div className="row text-center">
                        <div className="col">
                            {/*update using js*/}
                            <h6 id="pendingTrips">0</h6>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <span>Pending</span>
                        </div>
                    </div>
                </div>
                <div className="col-2 p-4" style={{ borderStyle: 'solid', borderRadius: '5px', borderColor: '#D4D4D4' }}>
                    <div className="row text-center">
                        <div className="col">
                            {/*update using js*/}
                            <h6 id="completedTrips">0</h6>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <span>Done</span>
                        </div>
                    </div>
                </div>
            </div>
            {/*place widgets here*/}
            <div id="widgets">
                {/*sample widgets*/}
                <div className="row mb-4">
                    <div className="col-8">
                        <CardComponent />
                    </div>
                    <div className="col">
                        <div className="row mb-4">
                            <CardComponent />
                        </div>
                        <div className="row">
                            <CardComponent />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{ marginRight: '1%' }}>
                        <div className="row-1" style={{ height: '25vh' }}>
                            <CardComponent />
                        </div>

                    </div>
                    <div className="col-7">
                        <div className="row" style={{ height: '25vh' }}>
                            <CardComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Dashboard;