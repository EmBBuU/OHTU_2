import React from "react";
import { useState, useEffect } from "react";
import eventService from "../services/events";

/**
 * 
 * Iframe - Atte Tanskanen
 * Connection to backend - Julia Juntunen
 */

export default function JoensuuMap() {
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
    <div>
      {events.map(currentevent => (
        <iframe
          className="homepageMap"
          key="1"
          src={currentevent.mapsLink}
          title="map"
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      ))}
    </div>
  );
}
