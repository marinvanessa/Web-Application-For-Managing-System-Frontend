import React from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import AddReservationComponent from "./AddReservationComponent";
import {BsCheckCircle, FcCancel} from "react-icons/all";
import ReservationService from "../services/ReservationService";
import "../styling/Reservation.css";
import ConfirmedReservation from "./ConfirmedReservation";
import CancelReservationDialog from "./CancelReservation";
import EditReservation from "./EditReservation";
import ViewGuests from "../Guests/ViewGuests";
import ViewNoGuestsReservations from "./ViewNoGuestsReservations";
import MoreInfo from "./MoreInfo";

class Reservation extends React.Component {
    state = {
        reservations: [],
        search: ''
    }

    constructor(props) {
        super(props);
        ReservationService.getReservationsByUser(sessionStorage.getItem("user_id")).then(res => {

            console.log(res.data);
            this.setState({reservations: res.data})
        })
    }

    render() {
        return(
            <body>
            <h1 align={"center"}>Reservations</h1>
            <div className={"bttns-res"}>
                <div className={"btn-me"}>
                    <AddReservationComponent/>
                </div>
                <div className={"btn-me"}>
                    <MoreInfo/>
                </div>
                <div className={"btn-me"}>
                    <ViewNoGuestsReservations/>
                </div>

            </div>
            <TableContainer className={"res-table-container"}>
                <Table stickyHeader={true} className={"table-res"} aria-label={"sticky table"}>
                    <TableHead className={"table-res-h"}>
                        <TableRow className={"table-res-r-h"}>
                            <TableCell className={"res-h-cell"} align={"center"}>Confirmed</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Description</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Location</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>NoOfPeople</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Reservation Date</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Time</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Hall Name</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Edit</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>View Guests</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Confirm/Cancel</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.reservations.map((reservation) => (
                            <TableRow key={reservation.id}>
                                <TableCell align={"center"}>
                                    {reservation.confirmed ? <BsCheckCircle/>: <FcCancel/>}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {reservation.description}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {reservation.hall.name}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {reservation.hall.dimension}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {reservation.reservationDate}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {reservation.time}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {reservation.hall.location}
                                </TableCell>
                                <TableCell align={"center"}>
                                    <EditReservation>{reservation.id}</EditReservation>
                                </TableCell>
                                <TableCell align={"center"}>
                                    <ViewGuests>{reservation.id}</ViewGuests>
                                </TableCell>
                                <TableCell align={"center"}>
                                    {reservation.confirmed ? <CancelReservationDialog>{reservation.id}</CancelReservationDialog> : <ConfirmedReservation>{reservation.id}</ConfirmedReservation>}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </body>

        )
    }
}
export default Reservation;