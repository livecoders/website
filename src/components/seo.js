import React from "react"
import { Helmet } from "react-helmet"

const SEO = (props) => {
  const imageIncluded = []

  if (props.ogImage) {
    imageIncluded.push({
      name: `twitter:image`,
      content: `https://livecoders.dev/og/members/${props.ogImage}`,
    })
  }

  return (
    <Helmet
      title={props.title}
      meta={[
        {
          name: `og:title`,
          content: props.title,
        },
        {
          name: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:title`,
          content: props.title,
        },
        {
          name: `twitter:card`,
          content: props.ogImage ? `summary_large_image` : `summary`,
        },
        ...imageIncluded,
      ]}
    />
  )
}

export default SEO
