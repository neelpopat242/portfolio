import React from 'react'
import Stack from 'react-bootstrap/Stack';

const WorkexperienceVol = () => {
    return (
        <div className= "container" id ="work">
            <Stack  gap={5} >
                <div className="bg-dark  col-md-6 ps-3 pt-3 ms-auto" style={{color:"white"}} >
                    <h3  >Work Experience / Volunteer <i className="fas fa-briefcase 2x"></i></h3> 
                    <br/>
                    <h5>Volunteer at Prabhat Education Trust</h5>
                    <ul>
                        <li>Preparing videos for the basic day to day activities for the disabled by demonstrating ie.  Bathing , Brushing , Eating , etc .</li>
                        <p className="text-end pe-3">August 20 - Dec 20</p>
                    </ul>
                    


                    <h5>Teaching Assistant at Ahmedabad University</h5>
                    <ul>
                        <li>Lab assistant for the Computer Organization  and Architecture Course
                        during my 6th semester
                        </li>
                        <p className="text-end pe-3">Jan 22 - April 22 </p>
                    </ul>
                    


                    <h5>Committee Member</h5>
                    <ul>
                        <li>Member for the Registration department for the college's technical fest <strong><a href="https://techingenium.org/" style={{color : "white"  }}>Ingenium</a></strong> 2021.</li>
                        <p className="text-end pe-3">Jan 21 - April 21</p>
                    </ul>
                    

                </div>
            </Stack>
        </div>
    )
}

export default WorkexperienceVol
