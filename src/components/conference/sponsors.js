import React from "react"
import styled from "styled-components"
let data = require("./sponsors.json")

const teamSponsors = data.filter((item) => item.level === "Team")
const sponsors = data
  .filter((item) => item.level !== "Team")
  .sort((a, b) => {
    let la = a.level.toLowerCase(),
      lb = b.level.toLowerCase()

    if (la < lb) {
      return -1
    }
    if (la > lb) {
      return 1
    }
    return 0
  })

const SponsorGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin: 32px;
  gap: 16px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const SponsorWrapper = styled.article`
  margin: 5vh 15vw;

  @media screen and (max-width: 600px) {
    margin: 5vh 5vw;
  }

  a {
    display: block;
    padding: 1vh 0;
  }
`

const Sponsor = ({ item }) => (
  <SponsorWrapper>
    <a href={item.url} target="_blank" rel="noreferrer">
      <img src={item.logo} alt={item.alt} />
    </a>
  </SponsorWrapper>
)

export default () => (
  <>
    <br />
    <h3>Team Sponsors</h3>
    <SponsorGrid>
      {teamSponsors.map((teamSponsor) => (
        <Sponsor item={teamSponsor} />
      ))}
    </SponsorGrid>
    <h3>Conference Sponsors</h3>
    <SponsorGrid>
      {sponsors.map((sponsor) => (
        <Sponsor item={sponsor} />
      ))}
    </SponsorGrid>
  </>
)
