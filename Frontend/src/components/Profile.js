import React from "react";
import UserService from '../components/services/UserService'
import {Button, TextField} from "@material-ui/core";
import Logout from "./Authorization/Logout";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        window.profileComponent = this
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.handleRefresh();
    }

    handleRefresh = () => {
        UserService.getUserByEmail(sessionStorage.getItem('email'))
            .then(res => {

                const userID = res.data.id;
                const firstName = res.data.firstName;
                const lastName = res.data.lastName;
                sessionStorage.setItem('user_id', userID);
                sessionStorage.setItem("firstName", firstName);
                sessionStorage.setItem("lastName", lastName);
                this.setState({user: res.data})
            })
    }


    render() {
        return (
            <body className={"users-body"}>
            <h1 className={"profile-header"}>Profile</h1>
            <Logout/>
            {this.state.user != null ?
                <div className={"all-photo-txt"}>

                    <div className={"all-txt-field-profile"}>
                        <TextField
                            className={"txt-field-profile"}
                            id="firstname"
                            label="First name:"
                            type="text"
                            defaultValue={this.state.user.firstName}
                            disabled={true}
                        >
                        </TextField>
                        <TextField
                            className={"txt-field-profile"}
                            id="lastname"
                            label="Last name:"
                            type="text"
                            defaultValue={this.state.user.lastName}
                            disabled={true}
                        >
                        </TextField>

                        <TextField
                            className={"txt-field-profile"}
                            id="email"
                            label="Email:"
                            type="text"
                            defaultValue={this.state.user.email}
                            disabled={true}
                        >
                        </TextField>

                    </div>

                </div>
                :
                <div></div>
            }

            </body>


        )
    }
}

export default Profile;