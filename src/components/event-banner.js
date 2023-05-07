import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

/**
  EventBanner.js

  Example Usage:

  ```js
  import EventBanner from "./event-banner"

  <EventBanner
    link={"conference"}
    date={"March 8th, 2021"}
    title={"International Womens' Day Event"}
  />
  ```
 */

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

const EventBanner = ({ date, title, link = "lcc3" }) => {
  return (
    <>
      {date && (
        <EventWrapper>
          <Link to={`/${link}`}>{`${title} | ${date}`}</Link>
        </EventWrapper>
      )}
    </>
  )
};
export default EventBanner;