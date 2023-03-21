import * as React from "react";
import ReservationService from "../services/ReservationService";
import Button from "@material-ui/core/Button";
import {FaInfoCircle, MdClose} from "react-icons/all";
import {Dialog, DialogTitle} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {ListGroup} from "react-bootstrap";
import '../styling/MoreInfo.css';

export default function MoreInfo() {
    const [open, setOpen] = React.useState(false);
    const [reservations, setReservations] = React.useState([]);
    const [cheapReservations, setCheapReservations] = React.useState([]);
    const [expensiveReservation, setExpensiveReservations] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
        ReservationService.getAllReservationByDimension().then(
            res => {
                console.log(res.data);
                setReservations(res.data);
                console.log(res.data[0])
            }
        )
        ReservationService.getCheapReservations().then(
            res => {
                setCheapReservations(res.data);
            }
        )
        ReservationService.getExpensiveReservations().then(
            res => {
                setExpensiveReservations(res.data);
            }
        )
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen} style={{
                color: "#476072",
                fontSize: "24px",
                marginBottom: "10px"
            }}>
                <FaInfoCircle/>
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
                    {"More Info"}
                </DialogTitle>
                <div className={"guests-list"}>
                    <p className={"text-1"}>Rezervarile facute pe salile care au dimensiunea maxima ordonate crescator dupa descriere:</p>
                    {
                        reservations.map((obj) => {
                            return <ListGroup.Item className={"item-guests"}  key={obj.id} value={obj.description}>
                                <div>{obj}</div>
                            </ListGroup.Item>
                        })
                    }
                    <p className={"text-1"}>
                        Rezervarile facute pe salile cele mai ieftine ordonate crescator dupa descriere:
                    </p>
                    {
                        cheapReservations.map((i) => {
                            return <ListGroup.Item className={"item-guests"}  key={i.id} value={i.description}>
                                <div>{i}</div>
                            </ListGroup.Item>
                        })
                    }
                    <p className={"text-1"}>
                        Rezervarile facute pe salile cele mai scumpe ordonate crescator dupa descriere:
                    </p>
                    {
                        expensiveReservation.map((i) => {
                            return <ListGroup.Item className={"item-guests"}  key={i.id} value={i.description}>
                                <div>{i}</div>
                            </ListGroup.Item>
                        })
                    }
                </div>
            </Dialog>
        </div>
    );
}