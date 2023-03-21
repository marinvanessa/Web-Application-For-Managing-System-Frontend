import * as React from 'react';
import Button from '@material-ui/core/Button';
import ReservationService from "../services/ReservationService";
import {AiOutlineUnorderedList, BsCheckCircle, FcCancel, MdClose} from "react-icons/all";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {Dialog, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import EditReservation from "./EditReservation";
import ViewGuests from "../Guests/ViewGuests";
import CancelReservationDialog from "./CancelReservation";
import ConfirmedReservation from "./ConfirmedReservation";

export default function ViewNoGuestsReservations() {
    const [open, setOpen] = React.useState(false);
    const [reservations, setReservations] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
        ReservationService.getAllReservationsWithoutGuests().then(
            res => {
                console.log(res.data);
                setReservations(res.data);
            }
        )
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}
                    style={{
                        textTransform: "capitalize",
                        marginBottom: "10px",
                        color: "#476072",
                    }}>
                    Reservation without Guests
            </Button>

            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}>
                <Toolbar style={{
                    backgroundColor: "#476072",
                    border: "none",
                }}>
                    <IconButton onClick={handleClose}
                                style={{
                                    color: "white",
                                    marginLeft: "90%"
                                }}>
                        <MdClose/>
                    </IconButton>
                </Toolbar>
                <DialogTitle
                    style = {{
                        textAlign: 'center',
                        fontFamily: "Hervetica",
                        color: "#476072"
                    }}
                    id="alert-dialog-title">
                    {"Reservations Without Guests"}
                </DialogTitle>
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
                            {reservations.map((reservation) => (
                                <TableRow key={reservation.id}>
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
            </Dialog>
        </div>
    );
}