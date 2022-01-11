import React from "react";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div className="container ">
      <div className="row align-items-start my-4" style={{ color: "white" }}>
        
          <h2 className="">
            Projects  <i class="em em-rocket" aria-label="ROCKET"></i>
            <i
              class="em em-computer"
              aria-label="PERSONAL COMPUTER"
            >  
            </i>
          </h2>
          <br />
          <ProjectItem
            title="Daily News"
            stack_used="React.Js | News Api | Bootstrap"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit
            , sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            githublink="https://neelpopat242.github.io/yn/"
          />
          <ProjectItem
            title="TextUtils "
            stack_used="React.Js | Bootstrap"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit
            , sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            githublink="https://neelpopat242.github.io/yn/"
          />

          <ProjectItem
            title="TextUtils "
            stack_used="React.Js | Bootstrap"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit
            , sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            githublink="https://neelpopat242.github.io/yn/"
          />
        </div>
      </div>
    
  );
};

export default Project;
