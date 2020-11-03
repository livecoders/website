import React from "react"
import styled from "styled-components"
let data = require("./lcc3-schedule.json")

const events = data.filter((item) => item.confirmed)

const Divider = styled.div`
  height: 0;
  width: 70vw;

  padding: 0 !important;
  margin: 0 0 0 15vw;

  border: solid 1px white;
`;

const SpeakerWrapper = styled.article`
  margin: 5vh 15vw; 

  @media screen and (max-width: 600px) {
    margin: 5vh 5vw; 
  }

  a {
    display: block;
    font-weight: bold;
    color: whitesmoke;
    padding: 1vh 0;
  }

  .speakerName {
    font-weight: bold;
    font-size: xx-large;
  }

  .sessionTitle {
    font-family: "Press Start 2P", sans-serif;
    text-transform: uppercase;
    font-weight: 400;
  }

  .points {
    font-weight: bold;
    font-size: x-large;
  }
`;

const Bio = styled.div`
  text-align: justify;
`;

const List = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &>* {
    text-align: left;
    padding: 1vh 0;
  }
`;

const Speaker = ({ event,index, length }) => (
  <React.Fragment key={event.utc}>
    <a name={event.name} id={event.name}>
      <SpeakerWrapper className="speaker">
        <h3 className="speakerName">{event.name}</h3>
        <a href={`#schedule`}>Back to Schedule</a>
        <br />
        <span className="sessionTitle">{event.title}</span>
        <br />
        <Bio>
        {event.bio.map((bioLine, i) => (
          <p key={i}>{bioLine}</p>
        ))}
        </Bio>
        {event.points.length > 0 && <h4 className="points">5 Key Points</h4>}
        <List>
          {event.points.length > 0 &&
            event.points.map((point, i) => {
              return <li key={i}>{point}</li>
            })}
        </List>
      </SpeakerWrapper>
    </a>

    {index !== length-1 && <Divider></Divider>}
  </React.Fragment>
)

export default () => (
  <>
    <br />
    {events.map((event, i, arr) => (
      <Speaker event={event} key={event.utc} index={i} length={arr.length} />
    ))}
  </>
)
