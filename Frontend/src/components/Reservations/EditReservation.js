import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField} from "@material-ui/core";
import {MdEdit} from "react-icons/md";
import ReservationService from "../services/ReservationService";

export default function EditLocationDialog(id) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseConfirm = () => {
        let description = document.getElementById("description").value;
        let reservationDate = document.getElementById('reservationDate').value;
        let time = document.getElementById('time').value;

        ReservationService.editReservation(id.children, description, reservationDate, time);
        handleClose()
    };


    return (
        <div>
            <Button className={"addButton"} variant="outlined" onClick={handleClickOpen}>
                <MdEdit/>
            </Button>
            <Dialog
                className={"dialog-add-pa"}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle
                    style = {{
                        textAlign: 'center',
                        borderBottom: '1px solid #424874',
                        color: '#424874',
                        fontFamily: "Helvetica",
                    }}
                    id="alert-dialog-title">{"Modifica Reservare"}
                </DialogTitle>

                <DialogContent>
                    <TextField
                        className={"txt-field-add-pa"}
                        id="description"
                        label="Description:"
                        type="text"
                        defaultValue={id.children.description}
                        fullWidth
                    />

                    <TextField
                        className={"txt-field-add-pa"}
                        id="reservationDate"
                        label="Reservation Date:"
                        type="text"
                        defaultValue={id.children.reservationDate}
                        fullWidth
                    />

                    <TextField
                        className={"txt-field-add-pa"}
                        id="time"
                        label="Time:"
                        type="text"
                        defaultValue={id.children.time}
                        fullWidth
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirm}
                            style={{
                                color: '#424874',
                                fontFamily: "Helvetica",
                            }}>
                        Confirm
                    </Button>
                    <Button onClick={handleClose}
                            style={{
                                color: '#424874',
                                fontFamily: "Helvetica",
                            }}
                            autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}