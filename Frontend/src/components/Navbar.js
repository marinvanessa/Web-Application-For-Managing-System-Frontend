import  './styling/Navbar.css';
import Logout from "./Authorization/Logout";
import React from "react";
import MoreInfoWorkers from "./Workers/MoreInfoWorkers";
export default function Navbar(){
    return(
        <div className={"Navbar"}>
            <div className={"allSide"}>
                <div className={"links"}>
                    <a href="home">Acasa</a>
                    <a href={"profile"}>Profile</a>
                    <a href="reservations">Reservations</a>
                    <a href={"halls"}>Halls</a>
                    <a href={"confirmed"}>Confirmed Reservations</a>
                </div>
            </div>
        </div>
    )
}