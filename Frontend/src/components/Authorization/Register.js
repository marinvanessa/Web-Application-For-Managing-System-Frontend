import React from 'react';
import '@material-ui/core';
import '../styling/Register.css';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from "@material-ui/core";
import AuthenticationService from "../services/AuthenticationService";


export default function Register() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseConfirm = () => {
        AuthenticationService.registerUser(document.getElementById('firstName').value,
            document.getElementById('lastName').value,
            document.getElementById('email').value,
            document.getElementById('password').value
        );
        handleClose()
    };

    return (
        <div className={"register-main-page"}>
            <Button onClick={handleClickOpen} className={"register-button"} variant={"text"}>
                Sign Up
            </Button>
            <Dialog className={"dialog-box"} open={open} onClose={handleClose}>
                <DialogTitle className={"title-register"}
                    style={{
                        backgroundColor: "#EEEEEE",
                        color: "#476072",
                        borderBottom: "2px solid #476072",
                        textAlign: "center"
                    }}>
                    Register</DialogTitle>
                <DialogContent
                    style={{
                        width:"400px",
                        height: "300px",
                        backgroundColor: "#EEEEEE"
                    }}
                    className={"dialog-center"}>
                    <TextField
                        style ={{
                            marginTop: "10px"
                        }}
                        id={"firstName"}
                        autoFocus={true}
                        label={"First Name:"}
                        type={"text"}
                        fullWidth={true}
                        InputLabelProps={{
                            style: {
                                color: "#476072",
                                fontSize: "14px",
                                fontFamily: "Hervetica"
                            }
                        }}/>

                    <TextField
                        style ={{
                            marginTop: "10px"
                        }}
                        id={"lastName"}
                        autoFocus={true}
                        label={"Last Name:"}
                        type={"text"}
                        fullWidth={true}
                        InputLabelProps={{
                            style: {
                                color: "#476072",
                                fontSize: "14px",
                                fontFamily: "Hervetica"
                            }
                        }}/>

                    <TextField
                        style ={{
                            marginTop: "10px"
                        }}
                        id={"email"}
                        autoFocus={true}
                        label={"Email:"}
                        type={"email"}
                        fullWidth={true}
                        InputLabelProps={{
                            style: {
                                color: "#476072",
                                fontSize: "14px",
                                fontFamily: "Hervetica"
                            }
                        }}/>

                    <TextField
                        style ={{
                            marginTop: "10px"
                        }}
                        id={"password"}
                        autoFocus={true}
                        label={"Password:"}
                        type={"password"}
                        helperText={"Password must have at least 8 characters."}
                        fullWidth={true}
                        InputLabelProps={{
                            style: {
                                color: "#476072",
                                fontSize: "14px",
                                fontFamily: "Hervetica"
                            }
                        }}/>

                </DialogContent>

            <DialogActions
                style={{
                    backgroundColor: "#EEEEEE"
                }}>
                <Button
                    style={{
                        backgroundColor: "#476072",
                        color: "#EEEEEE",
                        height: "30px",
                    }}
                    className={"button-send"}
                    onClick={handleCloseConfirm}>
                    Send</Button>
                <Button
                    style={{
                       backgroundColor: "#476072",
                        color: "#EEEEEE",
                        height: "30px"
                    }}
                    className={"button-cancel"}
                    onClick={handleClose}>
                    Cancel</Button>

            </DialogActions>
            </Dialog>

        </div>
    )
}