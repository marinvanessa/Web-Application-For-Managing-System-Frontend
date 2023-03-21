import React from "react";
import ReservationService from "../services/ReservationService";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {BsCheckCircle, FcCancel} from "react-icons/all";
import CancelReservationDialog from "./CancelReservation";
import EditReservation from "./EditReservation";
import ViewGuests from "../Guests/ViewGuests";

export default class ViewConfirmedReservations extends React.Component {
    state = {
        reservations: []
    }

    constructor(props) {
        super(props);
        const confirmed = true;
        ReservationService.getAllConfirmedReservations(confirmed).then(
            res => {
                console.log(res.data);
                this.setState({reservations: res.data})
            }
        )
    }
    render() {
        return (
            <body>
            <h1 align={"center"}>Confirmed Reservations</h1>
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
                            <TableCell className={"res-h-cell"} align={"center"}>Cancel</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.reservations.map((reservation) => (
                            <TableRow key={reservation.confirmed}>
                                <TableCell align={"center"}>
                                    {reservation.confirmed ? <BsCheckCircle/>: <FcCancel/>}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {reservation.description}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {reservation.hall.location}
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
                                    {reservation.hall.name}
                                </TableCell>
                                <TableCell align={"center"}>
                                    <EditReservation>
                                        {reservation.id}
                                    </EditReservation>
                                </TableCell>
                                <TableCell align={"center"}>
                                    <ViewGuests>
                                        {reservation.id}
                                    </ViewGuests>
                                </TableCell>
                                <TableCell align={"center"}>
                                    <CancelReservationDialog>
                                        {reservation.id}
                                    </CancelReservationDialog>
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
