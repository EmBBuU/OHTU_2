import { Link } from "react-router-dom";
import logo from '../images/logo.png'

//täällä vielä olematon linkki tuo "Kirjaudu sisään", eli se ei
//johda atm mihinkää ku tota sivua ei oo olemassa viel
//ja tosiaan tän ulkonäöllinen muotoilu on kesken, en tiiä miten sen sais sillai tosi cooliksi

import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="nav">
            <img src={logo} alt="logo" className="logo"/>
            <Link to="/" className="Heading">ATK-YTP JOENSUU</Link>

            <div className="navButtons">
                <button className='btn-login'>
                    <Link to="/KirjauduSisaan">KIRJAUDU SISÄÄN</Link>
                </button>

                <button className='btn-info'>
                    <Link to="/InfoPage" className="InfoPage">Ohjeet</Link>
                </button>
            </div>

        </nav>
    </div>
  )
}

export default Navbar
