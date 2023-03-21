import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField} from "@material-ui/core";
import '../styling/AddReservationComponent.css';
import GuestService from "../services/GuestService";
import {IoIosPersonAdd} from "react-icons/all";

export default function AddGuest(id) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleCloseConfirm = () => {
        let first_name = document.getElementById("firstName").value;
        let last_name = document.getElementById('lastName').value;
        let phone_number = document.getElementById('phone_number').value;
        let covid_certification = document.getElementById("covid_certification").value;
        GuestService.addGuest(first_name, last_name, phone_number, covid_certification, id.children);

        handleClose()
    };

    return (
        <div>
            <Button className={"addButton"} onClick={handleClickOpen}>
                <IoIosPersonAdd
                    style={{
                        color: "white",
                        fontSize: "25px"
                    }}/>
            </Button>
            <Dialog
                className={"dialog-add-r"}
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
                    id="alert-dialog-title">{"Add Reservation"}
                </DialogTitle>

                <DialogContent className={"diag-r-content"}>

                    <TextField
                        className={"txt-field-add-pa"}
                        id="firstName"
                        label="FirstName:"
                        type="text"
                        fullWidth
                    />

                    <TextField
                        className={"txt-field-add-pa"}
                        id="lastName"
                        label="LastName:"
                        text="text"
                        fullWidth
                    />

                    <TextField
                        className={"txt-field-add-pa"}
                        id="phone_number"
                        label="Phone Number:"
                        text="text"
                        fullWidth
                    />

                    <TextField
                        className={"txt-field-add-pa"}
                        id="covid_certification"
                        label="Covid:"
                        text="text"
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