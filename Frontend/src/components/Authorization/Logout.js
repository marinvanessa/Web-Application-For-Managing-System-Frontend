import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

export default function Logout() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseConfirm = () => {
        sessionStorage.clear();
        window.location.reload();
        handleClose();
    };

    return (
        <body className={"logout-body"}>
        <Button className={"logout-btn"} onClick={handleClickOpen}
        style={{
            textTransform: "none",
            color: "#EEEEEE",
            alignItems: "center",
            border: "2px solid #EEEEEE"
        }}>
            Logout
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{
                color: "#476072",
                textAlign: "center"
            }}>
                {"Vrei sa iesi din aplicatie?"}</DialogTitle>
            <DialogContent>
                <DialogActions>
                    <Button style={{
                        textTransform: "none",
                        color: "#476072"
                    }}
                            onClick={handleCloseConfirm}>Da</Button>
                    <Button style={{
                        textTransform: "none",
                        color: "#476072"
                    }}
                             onClick={handleClose}>Nu</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
        </body>
    );
}