import React from "react";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div className="container ">
      <div className="row  my-4 " >
        <div className="" style={{ color: "white" }}>
        <h2 className="">Projects <i class="em em-computer" aria-role="presentation" aria-label="PERSONAL COMPUTER"> </i></h2>
        <br/>
        <ProjectItem title="Daily News" stack_used="React | Bootstrap" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit
, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." githublink="https://neelpopat242.github.io/yn/"/>
        <ProjectItem title="TextUtils " stack_used="React | Bootstrap" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit
, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." githublink="https://neelpopat242.github.io/yn/"/>
        </div>
      </div>
    </div>
  );
};

export default Project;



 