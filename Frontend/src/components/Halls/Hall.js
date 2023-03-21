import React from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import "../styling/Reservation.css";
import HallService from "../services/HallService";
import ViewWorkers from "../Workers/ViewWorkers";

class Hall extends React.Component {
    state = {
        halls: [],
    }

    constructor(props) {
        super(props);
        HallService.getAllHallsWithReservations()
            .then(res=> {
                console.log(res.data)
                this.setState({halls: res.data})
            })

    }

    render() {
        return(
            <body>
            <h1 align={"center"}>Halls</h1>
            <TableContainer className={"res-table-container"}>
                <Table stickyHeader={true} className={"table-res"} aria-label={"sticky table"}>
                    <TableHead className={"table-res-h"}>
                        <TableRow className={"table-res-r-h"}>
                            <TableCell className={"res-h-cell"} align={"center"}>Name</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Location</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Dimension</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Price</TableCell>
                            <TableCell className={"res-h-cell"} align={"center"}>Workers</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.halls.map((hall) => (
                            <TableRow key={hall.id}>
                                <TableCell align={"center"}>
                                    {hall.name}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {hall.location}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {hall.dimension}
                                </TableCell>
                                <TableCell align={"center"}>
                                    {hall.price}
                                </TableCell>
                                <TableCell align={"center"}>
                                    <ViewWorkers>{hall.id}</ViewWorkers>
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
export default Hall;