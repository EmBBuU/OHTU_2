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

            <button>
                <Link to="/KirjauduSisaan">KIRJAUDU SISÄÄN</Link>
            </button>
        </nav>
    </div>
  )
}

export default Navbar

/*
export default function Navbar() {
    return (
        <nav className="nav">
            <img src={logo} alt="logo" className="logo"/>

            <Link to="/" className="Heading">ATK-YTP JOENSUU</Link>

            <p>
             <Link to="/KirjauduSisaan">KIRJAUDU SISÄÄN</Link>
             </p>


        </nav>

    )
}
*/