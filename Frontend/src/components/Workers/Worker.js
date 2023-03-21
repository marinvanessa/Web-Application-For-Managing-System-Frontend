import React from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import WorkerService from "../services/WorkerService";
import {BsCheckCircle, FcCancel} from "react-icons/all";
import MoreInfoWorkers from "./MoreInfoWorkers";

class Reservation extends React.Component {
    state = {
        workers: [],
    }

    constructor(props) {
        super(props);
        WorkerService.getAllWorkersByUserID(sessionStorage.getItem("user_id"))
            .then(res => {
                console.log(res.data);
                console.log(sessionStorage.getItem("user_id"));
                this.setState({workers: res.data})
            })
    }

    render() {
        return(
            <body>
            <h1 align={"center"}>Workers</h1>
            <div>
                <MoreInfoWorkers/>
            </div>
            <TableContainer className={"res-table-container"}>
                <Table stickyHeader={true} className={"table-res"} aria-label={"sticky table"}>
                    <TableHead className={"table-res-h"}>
                        <TableRow className={"table-res-r-h"}>
                            <TableCell className={"res-h-cell"} align={"center"}>FirstName</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>LastName</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Email</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Phone Number</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Availability</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Start Vacation</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>End Vacation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.workers.map((worker) => (
                            <TableRow key={worker.id}>
                                <TableCell align={"center"}>
                                    {worker.firstname}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {worker.lastname}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {worker.email}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {worker.phone}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {worker.available ? <BsCheckCircle/>: <FcCancel/>}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {worker.start_vacation}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {worker.end_vacation}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </body>

        )
    }
}
export default Reservation;