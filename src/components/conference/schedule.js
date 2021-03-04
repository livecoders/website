import React from "react"
import styled from "styled-components"
let data = require("./lcc4-schedule.json")
const { format } = require("date-fns")

const eventDate = "2021-03-08";

const EventGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(800px, 1fr));
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex-grow: 1;
  padding: 1vh 1vw;

  a {
    color: white;
    text-decoration: none;
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

  .sessionSpeakerPhoto {
    border-radius: 50%;
    height: 200px;
    width: 200px;
    position: relative;
    left: calc((100% - 200px)/2);
    
  }
  .sessionSpeaker {
    font-weight: bold;
  }

  .low-margin {
    margin: 0;
    padding: 1vh 0 5px;
  }

  .scheduleTime {
    padding-top: 1vh;
    font-size: medium;
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
    .sessionSpeaker {
      padding: 1vh 0;
    }

    .sessionTitle, .scheduleTime {
      padding: 2vh 0;
    }
  }
`

const events = data
  .map((item) => {
    const localized = new Date(
      `${eventDate}T${item.utc.length > 4 ? item.utc : "0" + item.utc}:00Z`
    )
    return Object.assign({}, item, {
      utcHour: parseInt(item.utc.replace(":", ""), 10),
      localized: format(localized, "MMMM do h:mm a"),
      dateObj: localized
    })
  })
  .filter((item) => item.confirmed).sort((a, b) => {
    let at = a.dateObj,
      bt = b.dateObj
  
    if (at < bt) {
      return -1
    }
    if (at > bt) {
      return 1
    }
    return 0
  })

const Event = ({ event }) => (
  <>
    <EventWrapper className="scheduleItem">
        <span className="sessionTitle">{event.title}</span>
        <br />
        {Array.isArray(event.description) ? event.description.map((txtLine, i) => (
          <p key={`desc-${i}`}>{txtLine}</p>
        )) : (<p>{event.description}</p>)}
        <br />
        <p className="low-margin">Hosted by:</p>
        {event.speakers.map((speaker, i) => (
          <><a href={"#"+speaker.name.replace(/\W/g,'_')} key={i}><span className="sessionSpeaker">{speaker.name}</span></a><br /></>
        ))}
        <br />
        <span className="scheduleTime">{event.localized}</span>
    </EventWrapper>
  </>
)

export default () => (
  <>
    <br />
    <EventGrid>
      {events.map((event) => (
        <Event event={event} key={event.utc} />
      ))}
    </EventGrid>
  </>
)
