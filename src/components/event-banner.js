import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const EventWrapper = styled.div`
  background-color: #663399;
  padding: 10px;
  text-align: center;
  font-weight: 700;
  border-bottom: 1px solid rgba(66, 33, 99, 1);

  a {
    color: #fee8ff;
  }
`

export default ({ date, link = "lcc3" }) => {
  return (
    <>
      {date && (
        <EventWrapper>
          <Link to={`/${link}`}>{`The Live Coders Conference | ${date}`}</Link>
        </EventWrapper>
      )}
    </>
  )
}
