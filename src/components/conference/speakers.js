import React from "react"
let data = require("./lcc3-schedule.json")

const events = data.filter((item) => item.confirmed)

const Speaker = ({ event }) => (
  <>
    <span>{event.name}</span>
    <br />
    <span>{event.title}</span>
    <br />
    {event.bio.map((bioLine) => (
      <p>{bioLine}</p>
    ))}
    <ol>
      {event.points.length > 0 &&
        event.points.map((point) => {
          return <li>{point}</li>
        })}
    </ol>
  </>
)

export default () => (
  <>
    <br />
    {events.map((event) => (
      <Speaker event={event} key={event.utc} />
    ))}
  </>
)
