import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";

export default () => (
  <React.Fragment>
    <SEO title="Code of Conduct | The Live Coders" />
    <div className="head">
      <Header />
      <div>
        <h1>Code of Conduct</h1>
        <p>Version 1.4 - February 2020</p>
      </div>
    </div>
    <section id="codeOfConduct">
      <h2>General</h2>
      <ul>
        <li>
          Be kind and welcoming to new viewers in your stream, other viewers in
          streams you watch, and new members to the Live Coders team
        </li>
        <li>
          Please ensure that you do not break Twitch Terms of Service (ToS)
          while being a part of the Live Coders team. You can read details about
          the ToS here:{" "}
          <a href="https://www.twitch.tv/p/legal/terms-of-service/">
            https://www.twitch.tv/p/legal/terms-of-service/
          </a>
        </li>
        <li>
          If you are unsure whether your behavior would be frowned upon or in
          violation of the Code of Conduct, or Twitch ToS, don't do it.
        </li>
      </ul>
      <h2>Integrity</h2>
      <ul>
        <li>
          Our reputation as a positive, engaging, and helpful team is our most
          valuable asset. It is up to each of us to make sure we continually
          work to maintain that reputation. All of our actions, with each other,
          and while we represent our team in other environments should increase
          our reputation.
        </li>
      </ul>
      <h2>Drugs and Alcohol</h2>
      <ul>
        <li>
          If you are of legal age to consume alcohol where you reside, feel free
          to drink alcohol, but please use good judgement and never drink in a
          way that leads to inappropriate behavior, endangers your life or the
          safety of others, violates the Live Coders Code of Conduct, violates
          ToS, or the law.
        </li>
        <li>
          Even if you reside in a state/country with legal marijuana, please
          refrain from smoking on camera.
        </li>
        <li>
          Illegal drug use on stream and at Live Coders events are strictly
          prohibited.
        </li>
      </ul>
      <h2>Suggestions</h2>
      <ul>
        <li>
          We love suggestions and feedback! If you want to provide feedback
          (positively or negatively) about our Discord or the team in general,
          please contact our Community Manager LilyHazel.
        </li>
        <li>
          We will do our best to address concerns, sugestions, and feedback in a
          timely manner.
        </li>
      </ul>
      <h2>Twitch ToS</h2>
      <ul>
        <li>
          We, as a team, must adhere to Twitch ToS (find ToS here:{" "}
          <a href="https://www.twitch.tv/p/legal/terms-of-service/">
            https://www.twitch.tv/p/legal/terms-of-service/
          </a>
          )
        </li>
        <li>
          Failure to do so may not only result in a warning/ban from Twitch, but
          will also result in a dismissal from the Live Coders team.
        </li>
      </ul>

      <h2> Harassment/Bullying/Discrimination </h2>
      <ul>
        <li>
          Support each other!! Members are expected to create a culture that is
          free of harassment, intimidation, bias and discrimination.
        </li>
        <li>
          The Live Coders team prohibits any form of discrimination, harassment,
          and bullying - verbal, physical, or visual. If you feel that you have
          been bullied or harassed by anyone on the Live Coders team,
          immediately reach out to Community Manager LilyHazel with as much
          information as possible.
        </li>
        <li>
          Members who report a harassment or bullying incident will NOT face
          retaliation from the Live Coders team.
        </li>
        <li>
          If a member is found to engage in harassing, bullying or
          discriminatory behavior, they will be put on a 30 day mute for the
          first offense (unless this is a severe incident, for which they may be
          banned). Meaning they will remain in the Discord, but won't be able to
          chat in any of the channels. After this period they will be unmuted,
          and can fully engage in the Discord once more.
        </li>
        <li>
          Depending on the severity of the 2nd incident, the member may be
          removed from the Discord for a 30 day period and re-invited after, OR,
          if the incident was severe enough, the member will be removed from the
          team AND prohibited from re-applying.
        </li>
      </ul>
      <h2>Conflicts</h2>
      <ul>
        <li>
          Arguments will happen, people disagree, it's normal. However, if an
          argument escalates to a point of creating actual conflict, LilyHazel
          will act as mediator.
        </li>
        <li>
          If you feel someone crossed a line, made you feel uncomfortable, or
          you need any other form of conflict mediation, please reach out to
          Community Manager LilyHazel with as much detail as you can provide.
        </li>
        <li>There will be NO retaliation against a member making a report.</li>
        <li>
          If your conflict happens to be with our Community Manager LilyHazel or
          you don't feel comfortable reaching out to her, please direct your
          report to CSharpFritz.
        </li>
      </ul>
      <h2>Appealing Dismissals/Bans from the Live Coders team</h2>
      <ul>
        <li>
          If you have received a mute, dismissal or ban from the team, and feel
          there has been a mistake, you may reach out to Community Manager
          LilyHazel or team founder CsharpFritz via Discord DM to request a
          dismissal/ban review.
        </li>
      </ul>
      <h2>Note about this Document</h2>
      <ul>
        <li>
          This Code of Conduct is a dynamic document and may be updated at any
          time. When revisions are made, the newest version will be published
          via The Live Coders Discord. If you have any questions, suggestions,
          etc. please reach out to Community Manager LilyHazel.
        </li>
      </ul>
    </section>
    <Footer />
  </React.Fragment>
);
