import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {InputLabel, TextField} from "@material-ui/core";
import ReservationService from "../services/ReservationService";
import HallService from "../services/HallService";
import '../styling/AddReservationComponent.css';
import {MdAddToQueue} from "react-icons/all";

export default function AddReservationComponent() {
    const [open, setOpen] = React.useState(false);
    const [hall, setHalls] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        getHalls();
    }, []);

    const getHalls = () => {
        HallService.getAllHalls()
            .then(res =>{
                setHalls(res.data);
            })
    }

    const handleCloseConfirm = () => {
        let description = document.getElementById("description").value;
        let time = document.getElementById('time').value;
        let reservationDate = document.getElementById('reservationDate').value;
        let hall = document.getElementById("hall").value;
        ReservationService.addReservation(description, reservationDate, time, hall, sessionStorage.getItem("user_id"));

        handleClose()
    };

    return (
        <div>
            <Button onClick={handleClickOpen} style={{
                marginBottom: "10px",
                fontSize: "24px",
                color: "#476072",
            }}>
               <MdAddToQueue/>
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
                        id="description"
                        label="Description:"
                        type="text"
                        fullWidth
                    />

                    <TextField
                        className={"txt-field-add-pa"}
                        id="reservationDate"
                        label="Reservation Date:"
                        text="text"
                        fullWidth
                    />

                    <TextField
                        className={"txt-field-add-pa"}
                        id="time"
                        label="Time:"
                        text="text"
                        fullWidth
                    />
                        <InputLabel className={"select_label"}>Hall:</InputLabel>
                        <select id={"hall"} className={"select-hall"}>
                            {
                                hall?.map((obj) => {
                                    return <option className={"hall-option"} key={obj.id} value={obj.id}>{obj.name}</option>
                                })
                            }
                        </select>

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