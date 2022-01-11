import React from 'react';
import Stack from 'react-bootstrap/Stack';

const ToolsLanguages = () => {
    return (
        <div className= "container" >
            <Stack  gap={5} >
                <div className=" bg-dark col-md-6 ps-3 my-5 pt-3 ms-auto" style={{color:"white"}}>
                   <h4>Skills / Tools <i className="em em-male-technologist"  aria-label=""></i></h4>
                    <br/>
                   <ul>
                       <button className='btn btn-light' style={{color : "#F06529"}}><i className="fab fa-html5 fa-5x"></i></button>
                       <button className='btn btn-light mx-3' style={{color : "#2965f1"}}><i className="fab fa-css3-alt fa-5x"></i></button>
                       <button className='btn btn-light ' style={{color : "#563d7c"}}><i className="fab fa-bootstrap fa-5x"></i></button>
                       <button className='btn btn-light mx-3' style={{color : "black"}}><i className="fab fa-js fa-5x"></i></button>

                    </ul>
                    <ul>
                       <button className='btn btn-light ' style={{color : "#2965f1"}}><i className="fab fa-java fa-5x"></i></button>
                       <button className='btn btn-light mx-3' style={{color : "#2965f1"}}><i className="fab fa-react fa-5x"></i></button>
                       <button className='btn btn-light ' style={{color : "black"}}><i className="fab fa-github fa-5x"></i></button>
                       <button className="btn btn-light mx-2" href="https://icons8.com/icon/l75OEUJkPAk4/python"><img alt="" src="https://img.icons8.com/fluency/80/000000/python.png"/></button>
                   </ul>
                   

                </div>
            </Stack>
        </div>
    )
}

export default ToolsLanguages
