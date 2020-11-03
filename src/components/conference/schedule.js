import React from "react"
import styled from "styled-components"
let data = require("./lcc3-schedule.json")
const { format } = require("date-fns")

const EventGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  margin: 32px;
  gap: 16px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const EventWrapper = styled.article`
  border: 5px solid white;
  border-radius: 8px;
  background-image: url("../img/card-background.jpg");
  background-size: cover;
  overflow-x: hidden;

  flex-grow: 1;
  padding: 1vh 1vw;

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    color: white;
    text-decoration: none;

    width: 100%;
    max-width: 100%;
    height: 100%
  }

  a:hover {
    cursor: pointer;
    color: rebeccapurple;
  }

  .sessionTitle {
    font-family: "Press Start 2P", sans-serif;
    text-transform: uppercase;
    font-weight: 400;
  }

  .sessionSpeaker {
    font-weight: bold;
  }

  .sessionSpeaker::before {
    content: "By ";
    font-weight: normal;
  }

  .scheduleTime {
    font-size: medium;
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
    .sessionTitle, .sessionSpeaker, .scheduleTime {
      padding: 2vh 0;
    }
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
    <EventWrapper className="scheduleItem">
      <a className="speaker" href={`#${event.name}`}>
        <span className="sessionTitle">{event.title}</span>
        <br />
        <span className="sessionSpeaker">{event.name}</span>
        <br />
        <span className="scheduleTime">{event.localized}</span>
      </a>
    </EventWrapper>
  </>
)

export default () => (
  <>
    <span>Your current time is: {format(new Date(), "MMMM do h:mm a")}</span>
    <br />
    <EventGrid>
      {events.map((event) => (
        <Event event={event} key={event.utc} />
      ))}
    </EventGrid>
  </>
)
