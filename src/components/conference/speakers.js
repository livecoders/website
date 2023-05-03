import React from "react"
import styled from "styled-components"

import GitHubLogo from "../../img/icons/github-square-brands.svg"
import TwitterLogo from "../../img/icons/twitter-square-brands.svg"
import TwitchLogo from "../../img/icons/twitch-brands.svg"
import YouTubeLogo from "../../img/icons/youtube-brands.svg"
import LinkIcon from "../../img/icons/link-solid.svg"

let data = require("./lcc4-schedule.json")

const events = data.filter((item) => item.confirmed)

const Divider = styled.div`
  height: 0;
  width: 70vw;

  padding: 0 !important;
  margin: 0 0 0 15vw;

  border: solid 1px white;

  @media screen and (min-width: 2000px) {
    width: 50vw;
    margin: 0 0 0 25vw;
  }
`;

const SpeakerWrapper = styled.article`
  margin: 5vh 15vw;

  @media screen and (max-width: 600px) {
    margin: 5vh 5vw;
  }

  @media screen and (min-width: 2000px) {
    margin: 5vh 25vw;
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
    margin: .5vh 0 0;
    padding: 0;
  }

  .speakerPosition {
    margin: .5vh 0;
    padding: 0;
  }

  .sessionSpeakerPhotoBody {
    border-radius: 50%;
    height: 300px;
    width: 300px;
    margin-bottom: 1vh;
  }

  .speakerSocial {
    display: flex;
    justify-content: center;

    margin: 0;
    padding: 0;
  }

  .speakerSocial img {
    padding: 5px;
    height: 30px;
    width: 30px;
  }

  @media screen and (max-width: 600px) {
    .sessionSpeakerPhotoBody {
      position: relative;
      left: calc((100vw - 300px)/2 - 32px - 5vw);
    }
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

const Speaker = ({ event, speaker, sindex, divide }) => (
  <React.Fragment key={event.utc+"-"+sindex}>
    <div name={speaker.name} id={speaker.name.replace(/\W/g,'_')}>
      <SpeakerWrapper className="speaker">
        <h3 className="speakerName">{speaker.name}</h3>
        <h4 className="speakerPosition">{speaker.position}</h4>
        <div className="speakerSocial">
          {speaker.social && [...Object.entries(speaker.social)].map((social, i) => (
            <a
              href={social[1]}
              target="_blank"
              rel="noopener noreferrer"
              key={`social-${i}`}
            >
              <img
                src={social[0] === "twitter" ? TwitterLogo : social[0] === "twitch" ? TwitchLogo : social[0] === "youtube" ? YouTubeLogo : social[0] === "github" ? GitHubLogo : LinkIcon}
                alt={social[0] === "twitter" ? "Twitter" : social[0] === "twitch" ? "Twitch" : social[0] === "youtube" ? "YouTube" : social[0] === "github" ? "GitHub" : social[0].charAt(0).toUpperCase() + (social[0].slice(1, social[0].length).toLowerCase())}
              />
            </a>
          ))}
        </div>
        <br />
        <img src={speaker.photo ? `${speaker.photo}` : "/images/speakers/unavailable.jpg"}  className="sessionSpeakerPhotoBody" alt={speaker.name} />
        <br />
        <a href={`#schedule`}>Back to Schedule</a>
        <br />
        <span className="sessionTitle">{event.title}</span>
        <br />
        <Bio>
        {Array.isArray(speaker.bio) ? speaker.bio.map((bioLine, i) => (
          <p key={`bio-${i}`}>{bioLine}</p>
        )) : (<p>{speaker.bio}</p>)}
        </Bio>
      </SpeakerWrapper>
    </div>

    {divide && <Divider></Divider>}
  </React.Fragment>
)

const Speakers = () => (
  <>
    <br />
    {events.map((event, i, arr) => (
      event.speakers.map((speaker, ii, sarr) => (
        <Speaker event={event} speaker={speaker} key={event.utc+"-"+ii} sindex={ii} divide={i !== arr.length-1 || ii !== sarr.length-1} />
      ))
    ))}
  </>
);
export default Speakers;