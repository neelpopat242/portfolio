import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const ProjectItem = (props) => {
    const github_link=()=>{
        window.open(props.githublink);
    }
    return (
        <div className="bg-dark col-md-3 mx-3 py-3 my-5">
            <h4 className="mx-2 text-center">{props.title}</h4>
            <h5 className="mx-2 text-center">{props.stack_used}</h5>
            <p className="mx-2 text-center">{props.description}</p>
            <Row className="justify-content-md-center">
                <Col md="auto">
                Github<i className="fab fa-github mx-3 " onClick={github_link}></i>
                </Col>
            
            </Row>
            
        </div>
    )
}

export default ProjectItem
