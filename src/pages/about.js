import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

export default () => (
  <div>
    <Header />
    <h1>About the Live Coders</h1>
    <p>
      We're a stream team of Live Coders who broadcast development-based
      edutainment on Twitch
    </p>
    <section>
      <h2>Who Are We?</h2>
      <p>
        On the Live Video platform, Twitch, we are a group of broadcasters who
        write code and make things while teaching viewers. We believe that live
        video is an amazing opportunity to teach, and want to share our
        expertise.
      </p>
      <p>
        You can find the team's page on Twitch at:
        https://twitch.tv/team/livecoders
      </p>
      <a href="https://twitch.tv/team/livecoders">View Twitch Team Home Hub</a>
    </section>
    <section>
      <h2>Qualifications to be a member</h2>
      <p>
        We want to ensure that broadcasters on the team are makers who have made
        a commitment to broadcast on the Twitch platform with a positive and
        welcoming atmosphere. Members and prospective members:
      </p>
      <div className="twoByThreeGrid">
        <div className="card">
          <span className="icon"></span>
          <h3>Be a Twitch Affiliate or Partner</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            nobis corporis, ducimus quisquam adipisci commodi deserunt ab,
            nesciunt architecto, voluptate mollitia aperiam voluptas magnam quod
            non. Omnis neque enim veniam!
          </p>
        </div>
        <div className="card">
          <span className="icon"></span>
          <h3>During broadcasts, politely answer questions from viewers</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            nobis corporis, ducimus quisquam adipisci commodi deserunt ab,
            nesciunt architecto, voluptate mollitia aperiam voluptas magnam quod
            non. Omnis neque enim veniam!
          </p>
        </div>
        <div className="card">
          <span className="icon"></span>
          <h3>Promote a positive, inclusive, and welcoming chat room</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            nobis corporis, ducimus quisquam adipisci commodi deserunt ab,
            nesciunt architecto, voluptate mollitia aperiam voluptas magnam quod
            non. Omnis neque enim veniam!
          </p>
        </div>
        <div className="card">
          <span className="icon"></span>
          <h3>Are a person, not a brand or company account</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            nobis corporis, ducimus quisquam adipisci commodi deserunt ab,
            nesciunt architecto, voluptate mollitia aperiam voluptas magnam quod
            non. Omnis neque enim veniam!
          </p>
        </div>
        <div className="card">
          <span className="icon"></span>
          <h3>Regularly write code or make things with technology</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            nobis corporis, ducimus quisquam adipisci commodi deserunt ab,
            nesciunt architecto, voluptate mollitia aperiam voluptas magnam quod
            non. Omnis neque enim veniam!
          </p>
        </div>
      </div>
      <a href="#">Apply Today</a>
    </section>
    <Footer />
  </div>
);
