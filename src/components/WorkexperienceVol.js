import React from 'react'
import Stack from 'react-bootstrap/Stack';

const WorkexperienceVol = () => {
    return (
        <div className= "container" >
            <Stack  gap={5} >
                <div className="bg-dark  col-md-6 ps-3 pt-3 ms-auto" style={{color:"white"}}>
                    <h2>Education <i class="em em-mortar_board"  aria-label="GRADUATION CAP"></i></h2> 
                    <br></br>
                    <p><b>B.Tech in Computer Science and Engineering</b></p>
                    
                    <p><b>SEAS , Ahmedabad University</b></p>
                    <p className="text-end pe-3 "><b>Till 5th sem - 3.4/4.0 CGPA</b></p>

                </div>
            </Stack>
        </div>
    )
}

export default WorkexperienceVol
