import React from "react";

const ExtraActivities = () => {
  return (
    <div className="container">
      <div className="row  my-5" style={{ width: "60%" }}>
        <div className=" bg-dark" style={{ color: "white" }}>
          <br />
          <h2>
            Co-Curricular Activities <i className="fas fa-users"></i>
          </h2>
          <br />
          
          <ul>
          <h4>#30DaysofGCP</h4>
            <li>Taken part in 30 Days of Google Cloud Program and Completed both the tracks of the program
Cloud Engineering
Data Science ,Machine Learning . I learned about Kubernetes, VMs , APIs used for ML processing and many more.</li> 
          </ul>

          <ul>
            <h4>Car Parking Assistor</h4>
          <li>Prepared a arduino based car parking assistance using ultrasonic
             sensors as the part of SIE (Electronics) course project . </li>
          <li>
            The project was developed in real time and the precaution
            were produced in the form of sound using buzzers and display of LEDs.

          </li>
          </ul>  
        </div>
      </div>
    </div>

  );
};

export default ExtraActivities;
