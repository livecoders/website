import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Sponsor from "../components/sponsor"

const SampleSponsors = [
  {
    image:
      "https://media.discordapp.net/attachments/723153713480335440/747623069056761867/vuevember5.png?width=810&height=263",
    alt: "NOT sveltember",
    href: "https://w3schools.com",
  },
  {
    image:
      "https://media.discordapp.net/attachments/723153713480335440/747621734257131620/Sveltember8.png?width=810&height=251",
    alt: "Sveltember",
    href: "https://google.com",
  },
]

export default () => (
  <React.Fragment>
    <SEO title="LCC3 | The Live Coders" />
    <div className="head">
      <Header />
      <div>
        <h1>Live Coders Conference 3, 2020</h1>
        <p>Wash hands, cover face, be nice</p>
      </div>
    </div>
    <section id="timedate">Date Oct 29</section>
    <section id="live">
      <a
        href="https://www.twitch.tv/livecoders"
        target="_blank"
        rel="noreferrer"
      >
        Live Conference Stream
      </a>
    </section>
    <section>
      <title>
        <h3>Agenda</h3>
      </title>
    </section>
    <section id="sponsors">
      <h1>Sponsors</h1>
      {SampleSponsors && (
        <React.Fragment>
          {SampleSponsors.map((sponsor, key) => (
            <Sponsor
              image={sponsor.image}
              alt={sponsor.alt}
              href={sponsor.href}
              key={key}
            />
          ))}
        </React.Fragment>
      )}
    </section>

    <Footer />
  </React.Fragment>
)
