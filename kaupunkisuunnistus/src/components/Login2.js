import React from "react";
import { Link, useNavigate} from "react-router-dom";
import loginService from "../services/login";
import Notification from "./Notification";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";


const Login2= () => {
    const [username, setUsername] = useState("") 
    const [password, setPassword] = useState("") 
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const usenavigate=useNavigate();


    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('logging in with', username, password)
       
        if (validate()) {
          ///implentation
          console.log('proceed');
           axios.get(process.env.REACT_APP_USERS)/*.then((res) => {
              return res.json();
          })*/.then((resp) => {
              console.log(resp)
              if (resp.username === username) {
                  toast.success("");
              }
              if (resp.password === password) {
                  toast.success('Success');
                  sessionStorage.setItem('username',username);
                  sessionStorage.setItem('userrole',resp.role);
                  usenavigate('/Login')
              }else{
                setErrorMessage('wrong credentials1')
                setTimeout(() => {
                  setErrorMessage(null)
                }, 5000)
              }
          }).catch((err) => {
              console.log("error");
              setErrorMessage('wrong credentials')
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
              //toast.error('Login Failed due to :' + err.message);
          });
      }
         /*catch (exception) {
          setErrorMessage('wrong credentials')
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        }*/
      }
      const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }

    
      return (
        <div>
    
          <Notification message={errorMessage} />
          <div className="loginFormDiv">
          <h1>Kirjaudu sisään</h1>
          <form className="loginForm" onSubmit={handleLogin} >
            <div>
              username
                <input
                type="text"
                value={username}
                name="Username"
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div>
              password
                <input
                type="password"
                value={password}
                name="Password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">login</button>
          </form>
        </div>
        </div>
      )
}
export default Login2