import React, {useState} from "react";
import axios from "axios";
import '../styling/Login.css';
import avatar from '../img/avatar1.svg';
import ballroom from '../img/ball.svg';
import Register from './Register';

async function login(email, password) {
    axios.post('http://localhost:8081/user/login',
        {
            "email": email,
            "password": password
        },{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            }
        }).then(res => {
            console.log(res);
            let loginToken = res.data;
            sessionStorage.setItem('loginToken', loginToken)
            sessionStorage.setItem('email', email)
            window.location.replace('http://localhost:3000/home')
        }
    )
}

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await login(email, password);
        console.log(response);
    }


    return (
        <body className={"login-main-page"}>
        <h1 className={"mess"}>Ballroom</h1>
        <img className={"ballroom"} src={ballroom} alt="ballroom"/>
          <div className={"login-box"}>
              <div className={"title-img"}>
                  <img className={"avatar"} src={avatar} alt="avatar"/>
                  <h1>Login</h1>
              </div>
              <form className={"login-form"} method={"post"} onSubmit={handleSubmit}>
                  <div className={"txt-field"}>
                      <span></span>
                      <input type={"text"} onChange={e => setEmail(e.target.value)} required={true}/>
                      <label>Email:</label>
                  </div>
                  <div className={"txt-field"}>
                      <span></span>
                      <input type={"password"} onChange={e => setPassword(e.target.value)} required={true}/>
                      <label>Password:</label>
                  </div>
                  <button className={"login-button"} type={"submit"}>Login</button>
                  <div className={"signup-link"}>New user?<Register/></div>
              </form>
          </div>
        </body>
    )
}