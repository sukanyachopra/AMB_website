import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="heading-page">ANEMIA MUKT BHARAT</div>
      <div className="aboutContent container">
        <div className="content">
          <p>
            Anemia is a key health concern for young girls and boys across the
            country.But it is something that has a simple,workable solution -
            Blue, Iron Folic Acid (IFA) tablets once a week and de-worming
            tablets every six months. It really is that simple. We need to
            create awareness about how these simple steps can have a huge and
            long-lasting impact on this generation of girls and boys and on the
            generations to come.
            <br /> <span> - Priyanka Chopra, UNICEF Goodwill Ambassador</span>
          </p>
          <br />
        </div>
        <div className="social-icon">
          <a href="">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="">
            <i class="fa fa-youtube-play"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
