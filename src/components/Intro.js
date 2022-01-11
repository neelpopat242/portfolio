import React from "react";
import "../App.css";

const Intro = () => {
  return (
    <div className="container">
      <div className="row  my-5" style={{ width: "60%" }}>
        <div className="col-sm-9 bg-dark" style={{ color: "white" }}>
          <br/>
          <h2>About Me <i class="em em-raising_hand"  aria-label="HAPPY PERSON RAISING ONE HAND"></i></h2>
          <br />
          <p>
            Hi there! I am <b> Neel Popat </b>
            <i class="em em-wave" aria-label="WAVING HAND SIGN"></i>
          </p>
          <p>I love to code , play games and learn new things.</p>
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
