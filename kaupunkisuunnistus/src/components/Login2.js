import React from "react";
import { Link } from "react-router-dom";
import loginService from "../services/login";
import Notification from "./Notification";
import { useState } from "react";

const Login2= () => {
    const [username, setUsername] = useState("") 
    const [password, setPassword] = useState("") 
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('logging in with', username, password)
        try {
          const user = await loginService.login({
            username, password,
          })
          setUser(user)
          setUsername('')
          setPassword('')
        } catch (exception) {
          setErrorMessage('wrong credentials')
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        }
      }

      const LoginForm = () => (
        <div>
          <h1>Kirjaudu sisään</h1>
          <form onSubmit={handleLogin} >
            <div>
              username
                <input
                type="text"
                value={username}
                name="Username"
                onChange={(e) => setUsername(e.value)}
              />
            </div>
            <div>
              password
                <input
                type="password"
                value={password}
                name="Password"
                onChange={(event) => setPassword(event.value)}
              />
            </div>
            <button type="submit">login</button>
          </form>
        </div>
      )  
      return (
        <div>
    
          <Notification message={errorMessage} />
          <LoginForm/>
        </div>
      )
}
export default Login2