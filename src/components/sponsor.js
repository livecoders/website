import React from "react"
import styled from "styled-components"

const StyledLogo = styled.div`
  img {
    max-width: 100%;
    display: block;
    object-fit: contain;
  }
`
const WhiteBackground = styled.div`
  max-width: 95 vw;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 30px;
`

export default ({ image, alt = "Dev didn't care about a11y", href = "#" }) => (
  <article>
    <StyledLogo>
      <WhiteBackground>
        <a href={href} target="_blank" rel="noreferrer">
          <img src={image} alt={alt} />
        </a>
      </WhiteBackground>
    </StyledLogo>
  </article>
)
