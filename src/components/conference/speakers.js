import React from "react"
let data = require("./lcc3-schedule.json")

const events = data.filter((item) => item.confirmed)

const Speaker = ({ event }) => (
  <>
    <a name={event.name}></a>
    <article class="speaker">
      <h3>{event.name}</h3>
      <span class="sessionTitle">{event.title}</span>
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
    </article>
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
