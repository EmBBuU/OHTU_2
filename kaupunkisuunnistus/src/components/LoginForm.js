import React from "react";
import { useNavigate } from "react-router-dom";
import Notification from "./Notification";
import { useState } from "react";


const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const usenavigate = useNavigate();
  const USERS = process.env.REACT_APP_USERS
  const USER1 = JSON.parse(process.env.REACT_APP_USERS)


  const handleLogin = async (event) => {
    event.preventDefault()
    //console.log('logging in with', username, password);

    if (validate()) {
      ///implentation
      //console.log(USERS)
      //console.log(JSON.parse(USERS))
      //console.log(USER1.username)

      try {

        if (USER1.username === username) {
          console.log("käyttäjä oikein");
          if (USER1.password === password) {
            console.log('salasana oikein');
            //sessionStorage.setItem('username',username);
            //sessionStorage.setItem('userrole',USERS.role);
            usenavigate('/LoggedInMenu')
          } else {
            setErrorMessage('Salasana ei kelpaa')
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          }
        }
        else {
          setErrorMessage('Käyttäjätunnus ei kelpaa')
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        }
      } catch (err) {
        console.log("error");
        setErrorMessage('Virhe kirjautumisessa')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      };
    }
  }

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      setErrorMessage('Anna käyttäjätunnus ja salasana')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000);
    }
    if (password === '' || password === null) {
      result = false;
      setErrorMessage('Anna käyttäjätunnus ja salasana')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000);
    }
    return result;
  }


  return (
    <div>
      <Notification message={errorMessage} />
      <div className="loginFormDiv">
        <form className="loginForm" onSubmit={handleLogin} >
          <h2>KIRJAUDU SISÄÄN</h2>

          <div>
            <label htmlFor="username">Käyttäjätunnus:</label>
            <input className="loginInput"
              id="username"
              type="text"
              value={username}
              name="Username"
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Salasana:</label>
            <input className="loginInput"
              id="password"
              type="password"
              value={password}
              name="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">KIRJAUDU</button>
        </form>
      </div>
    </div>
  )
}
export default LoginForm