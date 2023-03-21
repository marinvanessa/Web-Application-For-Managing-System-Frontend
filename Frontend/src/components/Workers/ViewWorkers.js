import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {BsFillPersonLinesFill, MdClose} from "react-icons/all";
import '../styling/ViewGuests.css';
import DialogTitle from "@material-ui/core/DialogTitle";
import WorkerService from "../services/WorkerService";
import {ListGroup} from "react-bootstrap";
import MoreInfoWorkers from "./MoreInfoWorkers";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import contact from '../img/contact.svg';
import '../styling/ViewWorkers.css';


export default function ViewWorkers(id) {
    const [open, setOpen] = React.useState(false);
    const [noOfWorkers, setNoOfWorkers] = React.useState(0);
    const [workers, setWorkers] = React.useState([]);


    const handleClickOpen = () => {
        setOpen(true);
        WorkerService.getNoWorkersByHallId(id.children).then(
            res => {
                setNoOfWorkers(res.data);
            }
        )
        WorkerService.getWorkersByHallId(id.children).then(
            res => {
                console.log(res.data);
                setWorkers(res.data);
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
                    border: "none",
                    borderBottom: "2px solid white",
                }}>
                    <MoreInfoWorkers/>
                    <DialogTitle
                        style = {{
                            textAlign: 'center',
                            fontFamily: "Hervetica",
                            color: "white",
                            marginLeft: "40%"
                        }}
                        id="alert-dialog-title">
                        {"Workers"}
                    </DialogTitle>
                    <IconButton onClick={handleClose}
                                style={{
                                    color: "white",
                                    marginLeft: "40%"
                                }}>
                        <MdClose/>
                    </IconButton>
                </Toolbar>
                <div className={"info-worker"}>
                    <p>
                        The number of workers for this hall is: {noOfWorkers}
                    </p>
                </div>
                <div className={"contact-list-workers"}>
                    {workers?.map((w) => {
                            return <ListGroup.Item className={"item-worker"}  key={w.id} value={w.id}>
                                <Card className={"card-worker"}>
                                    <CardActionArea>
                                        <CardMedia component={"img"} className={"img-worker"} image={contact} alt={"guest"}/>
                                        <CardContent>
                                            <Typography gutterBottom variant={"h5"} component={"div"}>
                                                {w.firstname} {w.lastname}
                                            </Typography>
                                            <Typography variant={"body2"} color={"textSecondary"}>
                                                {"Phone: " + w.phone}
                                            </Typography>
                                            <Typography variant={"body2"} color={"textSecondary"}>
                                                {"Email: " + w.email}
                                            </Typography>
                                            <Typography variant={"body2"} color={"textSecondary"}>
                                                {"Vacation: " + w.start_vacation + "/" + w.end_vacation}
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