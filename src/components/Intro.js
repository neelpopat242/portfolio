import React from "react";
import "../App.css";

const Intro = () => {
  return (
    <div className="container">
      <div className="row  my-5" style={{ width: "60%" }}>
        <div className="col-sm-9 bg-dark" style={{ color: "white" }}>
          <br />
          <h2>
            About Me{" "}
            <i
              className="em em-raising_hand"
              aria-label="HAPPY PERSON RAISING ONE HAND"
            ></i>
          </h2>
          <br />
          <p>
            Hi there! I am <b> Neel Popat </b>
            <i className="em em-wave" aria-label="WAVING HAND SIGN"></i>
            <br />
          </p>
          <p>
            I am currently in my third year of Bachelors . I love to code , play
            games and learn new things.
          </p>
          {/* <h4></h4> */}
          <div className="row my-3">
            <div className="col-sm-1 mx-4 bg-dark">
              <a
                type="button"
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/neel-popat-87b430190/"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
            <div className="col-sm-1 mx-3 bg-dark">
              <a
                type="button"
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/neelpopat242"
              >
                {" "}
                <i className="fab fa-github fa-2x"></i>
              </a>
            </div>
            <div className="col-sm-1 mx-3 bg-dark">
              <a
                type="button"
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/NeelPopat10"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </div>
            <div className="col-sm-1 mx-3 bg-dark">
              <a
                type="button"
                className="btn btn-dark"
                href="mailto:neelpopat242@gmail.com"
              >
                <i className="fas fa-envelope-square fa-2x"></i>
              </a>
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
