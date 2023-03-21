import * as React from "react";
import Button from "@material-ui/core/Button";
import {FaInfoCircle, MdClose} from "react-icons/all";
import {Dialog, DialogTitle} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import '../styling/MoreInfo.css';
import WorkerService from "../services/WorkerService";
import {ListGroup} from "react-bootstrap";

export default function MoreInfoWorkers() {
    const [open, setOpen] = React.useState(false);
    const [workers, setWorkers] = React.useState([]);
    const [workers1, setWorkers1] = React.useState([]);
    const [workers2, setWorkers2] = React.useState([]);
    const [workers3, setWorkers3] = React.useState([]);
    const [workers4, setWorkers4] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
        WorkerService.getAllAvailableWorkersForReservations()
            .then(res => {
                setWorkers(res.data);
            })
        WorkerService.getAllWorkersThatEndsVacationBeforeReservations()
            .then(res => {
                setWorkers1(res.data);
            })
        WorkerService.getAllWorkersInVacation()
            .then(res => {
                setWorkers2(res.data);
            })
        WorkerService.getWorkerWithExpensiveHalls()
            .then(res => {
                setWorkers3(res.data);
            })
        WorkerService.getWorkerWithCheapHalls()
            .then(res => {
                setWorkers4(res.data);
            })
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen} style={{
                color: "white",
                fontSize: "24px",
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
                <div className={"info"}>
                    <p>
                        Workers that start the vacation after all your reservations:
                    </p>
                </div>
                <div className={"guests-list"}>
                    {
                        workers.map((w1) => {
                            return <ListGroup.Item className={"item-guests"}  key={w1.id} value={w1.id}>
                                <div className={"guest-details"}>
                                    {"Nume: " + w1.firstname + " " + w1.lastname}
                                    {", Concediu: " + w1.start_vacation + "/" + w1.end_vacation}
                                </div>
                            </ListGroup.Item>
                        })
                    }
                </div>
                <div className={"info"}>
                    <p>
                        Workers that end the vacation before all your reservations:
                    </p>
                </div>
                <div className={"guests-list"}>
                    {
                        workers1.map((worker) => {
                            return <ListGroup.Item className={"item-guests"}  key={worker.id}
                                                   value={worker.id}>
                                <div className={"guest-details"}>
                                    {"Nume: " + worker.firstname + " " + worker.lastname}
                                    {", Concediu: " + worker.start_vacation + "/" + worker.end_vacation}
                                </div>
                            </ListGroup.Item>
                        })
                    }
                </div>
                <div className={"info"}>
                    <p>
                        Workers that are in vacation during all reservation dates:
                    </p>
                </div>
                <div className={"guests-list"}>
                    {
                        workers2.map((w2) => {
                            return <ListGroup.Item className={"item-guests"}  key={w2.id} value={w2.id}>
                                <div className={"guest-details"}>
                                    {"Nume: " + w2.firstname + " " + w2.lastname}
                                    {", Concediu: " + w2.start_vacation + "/" + w2.end_vacation}
                                </div>
                            </ListGroup.Item>
                        })
                    }
                </div>
                <div className={"info"}>
                    <p>
                        Workers that work on the most expensive halls:
                    </p>
                </div>
                <div className={"guests-list"}>
                    {
                        workers3.map((w3) => {
                            return <ListGroup.Item className={"item-guests"}  key={w3.id} value={w3.id}>
                                <div className={"guest-details"}>
                                    {"Nume: " + w3.firstname + " " + w3.lastname}
                                </div>
                            </ListGroup.Item>
                        })
                    }
                </div>
                <div className={"info"}>
                    <p>
                        Workers that work on the cheapest halls:
                    </p>
                </div>
                <div className={"guests-list"}>
                    {
                        workers4.map((w4) => {
                            return <ListGroup.Item className={"item-guests"}  key={w4.id} value={w4.id}>
                                <div className={"guest-details"}>
                                    {"Nume: " + w4.firstname + " " + w4.lastname}
                                </div>
                            </ListGroup.Item>
                        })
                    }
                </div>
                <br></br>
            </Dialog>
        </div>
    );
}