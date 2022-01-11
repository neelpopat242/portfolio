import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProjectItem = (props) => {
  return (
    <div className="bg-dark col-md-3 mx-3 py-3 my-5">
      <h4 className="mx-2 text-center">{props.title}</h4>
      <h5 className="mx-2 text-center">{props.stack_used}</h5>
      <p className="mx-2 text-center">{props.description}</p>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <a
            className="btn btn-dark"
            target="_blank"
            rel="noreferrer"
            href={props.githublink}
          >
            {" "}
            <i className="fab fa-github mx-3 2x "></i>
          </a>
          <a
            className="btn btn-dark mx-3"
            target="_blank"
            rel="noreferrer"
            href={props.weblink}
          >
            {" "}
            <i className="fas fa-link mx-3 2x "></i>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectItem;
