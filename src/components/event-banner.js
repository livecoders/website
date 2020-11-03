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

export default () => (
  <EventWrapper>
    <Link to={`/lcc3`}>The Live Coders Conference | November 19th, 2020</Link>
  </EventWrapper>
)
