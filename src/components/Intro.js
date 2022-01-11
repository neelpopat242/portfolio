import React from "react";
import "../App.css";

const Intro = () => {

  const github_profile = () => {
    window.open("https://github.com/neelpopat242");
  }

  const linkedin_profile = () => {
    window.open();
  }

  const twitter_profile = () => {
    window.open();
  }

  const email_to = () => {
    window.open();
  }
  return (
    <div className="container">
      <div className="row  my-5" style={{ width: "60%" }}>
        <div className="col-sm-9 bg-dark" style={{ color: "white" }}>
          <br />
          <h2>
            About Me{" "}
            <i
              class="em em-raising_hand"
              aria-label="HAPPY PERSON RAISING ONE HAND"
            ></i>
          </h2>
          <br />
          <p>
            Hi there! I am <b> Neel Popat </b>
            <i class="em em-wave" aria-label="WAVING HAND SIGN"></i>
            <br />
          </p>
          <p>
            I am currently in my third year of Bachelors . I love to code , play
            games and learn new things.
          </p>
        {/* <h4></h4> */}
          <div className="row my-3">
            <div className="col-sm-1 mx-4 bg-dark">
              <i class="fab fa-linkedin fa-2x" onClick={linkedin_profile}></i>
            </div>
            <div className="col-sm-1 mx-3 bg-dark">
              <i class="fab fa-github fa-2x" onClick={github_profile}></i>
            </div>
            <div className="col-sm-1 mx-3 bg-dark">
              <i class="fab fa-twitter fa-2x" onClick={twitter_profile}></i>
            </div>
            <div className="col-sm-1 mx-3 bg-dark">
              <i class="fas fa-envelope-square fa-2x" onclick={email_to}></i>
            </div>
          </div>
        </div>
        <div className="col-sm-3 bg-dark">
          <img
            className="rounded-circle "
            src="https://i.ibb.co/rdCVL3Z/np.jpg"
            style={{ width: "100%", height: "80%", marginTop: "10%" }}
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
