import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField} from "@material-ui/core";
import {MdEdit} from "react-icons/md";
import GuestService from "../services/GuestService";

export default function EditGuests(id) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseConfirm = () => {
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById('lastName').value;
        let phone_number = document.getElementById('phone_number').value;

        GuestService.editGuest(id.children, firstName, lastName, phone_number);
        console.log(id.children);
        handleClose()
    };


    return (
        <div>
            <Button onClick={handleClickOpen}>
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
                    id="alert-dialog-title">{"Edit Guest Details"}
                </DialogTitle>

                <DialogContent>
                    <TextField
                        className={"txt-field-add-pa"}
                        id="firstName"
                        label="FirstName:"
                        type="text"
                        defaultValue={id.children.firstName}
                        fullWidth
                    />

                    <TextField
                        className={"txt-field-add-pa"}
                        id="lastName"
                        label="Last Name:"
                        type="text"
                        defaultValue={id.children.lastName}
                        fullWidth
                    />

                    <TextField
                        className={"txt-field-add-pa"}
                        id="phone_number"
                        label="Phone Number:"
                        type="text"
                        defaultValue={id.children.phone_number}
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