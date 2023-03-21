import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {BsCheckCircle, BsFillPersonLinesFill, FcCancel, MdClose} from "react-icons/all";
import GuestService from "../services/GuestService";
import {ListGroup} from "react-bootstrap";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import '../styling/ViewGuests.css';
import DialogTitle from "@material-ui/core/DialogTitle";
import AddGuest from "./AddGuest";
import EditGuest from './EditGuests';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import avatar from '../img/contact.svg';

export default function ViewGuests(id) {
    const [open, setOpen] = React.useState(false);
    const [guests, setGuests] = React.useState([]);
    const [noOfGuests, setNoOfGuests] = React.useState(0);

    const handleClickOpen = () => {
        setOpen(true);
        GuestService.getAllGuestsByReservationID(id.children).then(
            res => {
                console.log(id.children);
                console.log("JOHN")
                console.log(res.data);
                setGuests(res.data);
            }
        );
        GuestService.getNoOfGuests(id.children).then(
            res => {
                setNoOfGuests(res.data);
            }
        )
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
               <BsFillPersonLinesFill/>
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}>
                <Toolbar style={{
                    backgroundColor: "#476072",
                    borderBottom: "2px solid white",
                }}>
                    <AddGuest>{id.children}</AddGuest>
                    <DialogTitle
                        style = {{
                            textAlign: 'center',
                            fontFamily: "Hervetica",
                            color: "white",
                            marginLeft: "40%"
                        }}
                        id="alert-dialog-title">
                        {"Guests: "}
                    </DialogTitle>
                    <IconButton onClick={handleClose}
                                style={{
                                    color: "white",
                                    marginLeft: "40%"
                                }}>
                        <MdClose/>
                    </IconButton>
                </Toolbar>
                <div className={"info-guest"}>
                    <p>The number of guests is: {noOfGuests}</p>
                </div>
                <div className={"contact-list"}>
                    {guests?.map((obj) => {
                            return <ListGroup.Item className={"item-contact"}  key={obj.id} value={obj.id}>
                                <Card className={"card-contact"}>
                                    <CardActionArea>
                                        <CardMedia component={"img"} className={"img-avatar"} image={avatar} alt={"guest"}/>
                                        <CardContent>
                                            <Typography gutterBottom variant={"h5"} component={"div"}>
                                                {obj.firstName} {obj.lastName}
                                            </Typography>
                                            <Typography variant={"body2"} color={"textSecondary"}>
                                                {"Phone: " + obj.phone_number + " "}
                                                {obj.covid_certification ? <BsCheckCircle/>: <FcCancel/> }
                                            </Typography>
                                            <Typography className={"bttns-contact"}>
                                                <div className={"bttn-contact-me"}>
                                                    <ConfirmDeleteDialog>{obj.id}</ConfirmDeleteDialog>
                                                </div>
                                                <div className={"bttn-contact-me1"}>
                                                    <EditGuest>{obj.id}</EditGuest>
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </ListGroup.Item>
                    })
                    }
                </div>
            </Dialog>
        </div>
    );
}