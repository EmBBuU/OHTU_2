import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import eventService from "../services/events";

/**
 * Main author - Julia Juntunen
 */

function InfoPage() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    eventService.getAll().then((initialEvents) => {
      setEvents(initialEvents);
    });
  }, []);

  /*
  useEffect(() => {
    axios.get('http://localhost:3002/api/events').then(res => {
      setEvents(res.data)
    })
      .catch(err => {
        console.log(err)
      })
  }, [])
  */

  return (
    <div className="infopage">

      {events.map(currentevent => (
        <h2 key="1" className="eventinfoHeading">{currentevent.eventName}</h2>
      ))}


      {events.map(currentevent => (
        <p key="1" className="eventinfo">{currentevent.eventInfoText}</p>
      ))}


      <button className="previous">
        <Link to="/">TAKAISIN</Link>
      </button>
    </div>
  );
};

export default InfoPage;
