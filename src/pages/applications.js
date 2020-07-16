import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

import LiveCodersImg from "../img/livecoders-2.jpg"
import ChatBubbleIcon from "../img/icons/comments-regular.svg"
import HeartIcon from "../img/icons/heart-regular.svg"
import KeyboardIcon from "../img/icons/keyboard-regular.svg"
import UserIcon from "../img/icons/user-regular.svg"
import TwitchIcon from "../img/icons/twitch-brands.svg"

import "../css/applications.css"

export default () => (
  <React.Fragment>
    <SEO title="Applications | The Live Coders" />
    <div className="head">
      <Header />
      <div>
        <h1>Apply to be part of the team</h1>

        <a 
          href="https://github.com/livecoders/Home/issues/new?assignees=csharpfritz&labels=application&template=application.md&title=Application+for+Membership"
          className="btn"
        >
          Apply Now
        </a>
      </div>
    </div>
    <section id="criteria">
      <div>
        <h2>Qualifications</h2>
        <p>We want to ensure that broadcasters on the team are makers who have made a commitment 
          to broadcast on the Twitch platform with a positive and welcoming atmosphere. 
          Members and prospective members:</p>
          <ul>
            <li>Are at least 18 years of age.</li>
            <li>Twitch Affiliate or Partner status.</li>
            <li>Minimum of 5 average viewers over the last 30 days.</li>
            <li>During broadcasts, politely answer questions from viewers.</li>
            <li>Promote a positive, inclusive, and welcoming chat room (we discourage excessive Blue Comedy/Ribaldry).</li>
            <li>Regularly write code or make hardware with technology. Other content is cool.</li>
            <li>Are a person, not a brand or company account.</li>
          </ul>
      </div>
    </section>
    <section id="process">
      <div>
        <h2>The Process</h2>
        <p>
          <ul>
            <li>Hit the Apply Now button at the top of this page</li>
            <li>Fill in the GitHub issue to the best of your ability</li>
            <li>The Live Coders get alerted of your application</li>
            <li>Any team member can give their opinions on your stream and community.</li>
            <li>Taking all member opinions, the minimum criteria and looking closely at your VoDs 
              or live streams, we review your application.</li>
            <li>A decision is made and confirmed by at least one other Live Coder</li>
            <li>You the applicant are told if you are successful at becoming a Full team member, 
              an "Intern" in the Nurture Program or rejected.</li>
            <li>REJECTION: There have only ever been 3 Rejections in the past if the broadcaster 
              meets the minimum criteria.</li>
            <li>FULL TEAM MEMBERSHIP: Invited to the Twitch Team, Full Access to the discord server, 
              access to all the perks of being in the community</li>
            <li>NURTURE PROGRAM MEMBERSHIP: You didn't quite make the minimum criteria, however we saw 
              something we could nurture into moving into a Full Team position.</li> 
          </ul>
        </p>
      </div>
    </section>
    <section id="why">
      <div>
        <h2>Why this page exists</h2>
        <p>
          After a year and a half The Live Coders has grown from the initial intake to 190+ members. That's 
          almost 10 new members per month. With that, we want to be more open about the application process
          and make what we do more transparent to all. This makes sure you get correct and timely feedback 
          on your application. 
          We are improving the process continuously and this page is a step in that direction.  
        </p>
      </div>
    </section>
    <section id="faq">
      <div>
        <h2>Frequent Questions</h2>
        <h3>I haven't heard from you and my application is taking a long time. WHY?</h3>
        <p>We are aiming to look at applications on a 2 week cycle at this time. It was previously 
          monthly and we missed some. If we don't get back to you please feel free to comment on your GitHub issue.</p>
        <h3>I meet the minimum criteria, why wasn't I accepted?</h3>
        <p>Some of the criteria we look into is opinion based, like "polite and inviting" for example. 
          This is why we need at least two opinions on each application. If you don't quite hit the criteria,
          we are now inviting you to a nurture program, which give you access to team members and allows you to grow.</p>
        <h3>What is the Nurture Program</h3>
        <p>During the first run through of applications since Live Coders Conference 2, it became 
          apparent that there were a lot of broadcasters in the "not quite there" category. We saw the 
          potential and didn't want to flat out reject half of the applicants. Therefore the Nurture Program was created.
          This gives a slightly limited membership into the Live Coders as an "Intern". You are able to ask questions, get advice and grow
          your stream and community with the help of the Team .</p>
      </div>
    </section>
    <Footer />
  </React.Fragment>
)
