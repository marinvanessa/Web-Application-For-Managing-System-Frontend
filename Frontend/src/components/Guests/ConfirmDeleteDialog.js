import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {FaRegTrashAlt} from 'react-icons/fa';
import GuestService from "../services/GuestService";

export default function ConfirmDeleteDialog(id) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseConfirm = () => {
        GuestService.deleteGuest(id.children);
        handleClose()
    };


    return (
        <div>
            <Button onClick={handleClickOpen}>
                <FaRegTrashAlt/>
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
                        color: '#476072',
                    }}
                    id="alert-dialog-title">
                    {"Do you want to delete this person from the list?"}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText
                        style={{
                            marginTop: "10px",
                            color: "silver",
                        }}
                        id="alert-dialog-description">
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirm}
                            style={{
                                color: '#476072',
                            }}>
                        Yes
                    </Button>
                    <Button onClick={handleClose}
                            style={{
                                color: '#476072',
                            }}
                            autoFocus>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}