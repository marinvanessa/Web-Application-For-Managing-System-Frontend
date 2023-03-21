import './App.css';
import React from "react";
import Login from "./components/Authorization/Login";

import Reservation from "./components/Reservations/Reservations";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile";
import ViewConfirmedReservations from "./components/Reservations/ViewConfirmedReservations";
import Hall from "./components/Halls/Hall";


function App() {

     if(sessionStorage.getItem('loginToken') == null) {
         return <Login/>
     }
  return (
    <div className={"App"}>
       <Router>
           <Navbar/>
           <Routes>
               <Route path={"/profile"} element={<Profile/>}/>
               <Route path={"/reservations"} element={<Reservation/>}/>
               <Route path={"/confirmed"} element={<ViewConfirmedReservations/>}/>
               <Route path={"/halls"} element={<Hall/>}/>
           </Routes>
       </Router>



    </div>
  );
}

export default App;

