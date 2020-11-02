import React from "react"
let data = require("./lcc3-schedule.json")

const events = data.filter((item) => item.confirmed)

const Speaker = ({ event }) => (
  <React.Fragment key={event.utc}>
    <a name={event.name} id={event.name}>
      <article className="speaker">
        <h3>{event.name}</h3>
        <span className="sessionTitle">{event.title}</span>
        <br />
        {event.bio.map((bioLine, i) => (
          <p key={i}>{bioLine}</p>
        ))}
        <ol>
          {event.points.length > 0 &&
            event.points.map((point, i) => {
              return <li key={i}>{point}</li>
            })}
        </ol>
      </article>
    </a>
  </React.Fragment>
)

export default () => (
  <>
    <br />
    {events.map((event) => (
      <Speaker event={event} key={event.utc} />
    ))}
  </>
)
