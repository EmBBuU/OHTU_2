/**
 * Luokan työstäminen:
 * Backend yhdistys ja ulkonäkö - Julia
 */

import { Link } from "react-router-dom";
import logo from '../images/logo.png'
import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';

function Navbar() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/api/events').then(res => {
            setEvents(res.data)
        })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <table className="nav">
                <tbody>
                    <tr>
                        <td className="navTop">
                            <img src={logo} alt="logo" className="logo" />
                            <Link to="/" className="heading">
                                {events.map(eventName => (
                                    <h3 key="1" className="heading">{eventName.eventName}</h3>
                                ))}
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Navbar
