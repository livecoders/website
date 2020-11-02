import React from "react"
import styled from "styled-components"
let data = require("./lcc3-schedule.json")
const { format } = require("date-fns")

const EventWrapper = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: rebeccapurple;
  }
`

const events = data
  .map((item) => {
    const localized = new Date(
      `2020-11-19T${item.utc.length > 4 ? item.utc : "0" + item.utc}:00Z`
    )
    return Object.assign({}, item, {
      utcHour: parseInt(item.utc.replace(":", ""), 10),
      localized: format(localized, "MMMM do h:mm a"),
    })
  })
  .filter((item) => item.confirmed)

const Event = ({ event }) => (
  <>
    <article className="scheduleItem">
      <EventWrapper className="speaker" href={`#${event.name}`}>
        <span className="sessionTitle">{event.title}</span>
        <br />
        {event.name}
        <br />
        <span className="scheduleTime">{event.localized}</span>
      </EventWrapper>
    </article>
  </>
)

export default () => (
  <>
    <span>Your current time is: {format(new Date(), "MMMM do h:mm a")}</span>
    <br />
    <div className="scheduleContainer">
      {events.map((event) => (
        <Event event={event} key={event.utc} />
      ))}
    </div>
  </>
)
