import { Link } from "react-router-dom";
import logo from '../images/logo.png'


import React from 'react'

function Navbar() {
    return (
        <div>
            <table className="nav">
                <tbody>
                    <tr>
                        <td className="navTop">
                            <img src={logo} alt="logo" className="logo" />
                            <Link to="/" className="heading">ATK-YTP JOENSUU</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className="navBottom">
                            <button className='btn-login'>
                                <Link to="/Login" className="login">KIRJAUDU SISÄÄN</Link>
                            </button>

                            <button className='btn-info'>
                                <Link to="/InfoPage" className="infoPage">OHJEET</Link>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Navbar
