import React from 'react';
import ReservationService from "../services/ReservationService";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {RiReservedLine} from "react-icons/all";
import ViewGuests from "../Guests/ViewGuests";
import ViewConfirmedReservations from "./ViewConfirmedReservations";

export default function ConfirmedReservation(id) {
     const [open, setOpen] = React.useState(false);

     const handleClickOpen = () => {
       setOpen(true);
     }

    const handleClose = () => {
        setOpen(false);
    }

    const handleCloseConfirm = () => {
        ReservationService.confirmReservation(id.children)
        handleClose()
    };
    return (
        <div>
            <Button variant="outlined"  onClick={handleClickOpen}>
                <RiReservedLine/>
            </Button>
            <Dialog
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
                    }}
                    id="alert-dialog-title">
                    {"Confirma rezervarea"}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText
                        style={{
                            marginTop: "10px",
                            color: "silver",
                        }}
                        id="alert-dialog-description">
                        Esti sigur ca vrei sa confirmi rezervarea?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirm}
                            style={{
                                color: '#424874',
                            }}>
                        Da
                    </Button>
                    <Button onClick={handleClose}
                            style={{
                                color: '#424874',
                            }}
                            autoFocus>
                        Nu
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}
