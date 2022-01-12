import React from "react";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div className="container" id="project">
      <div className="row align-items-start my-4" style={{ color: "white" }}>
        
          <h2 className="">
            Projects  <i className="em em-rocket" aria-label="ROCKET"></i>
            <i
              className="em em-computer"
              aria-label="PERSONAL COMPUTER"
            >  
            </i>
          </h2>
          <br />
          <ProjectItem
            title="Daily News"
            stack_used="React.Js | News Api | Bootstrap"
            description="Developed an single page web app using React App for the latest news to the viewers.
            The news are fetched through the NewsAPI.org in the Json format.
            For the betterment purpose , filters for specific country / specific category news are also implemented"
            githublink="https://github.com/neelpopat242/newsapppp"
            weblink="https://github.com/neelpopat242"

          />
          <ProjectItem
            title="TextUtils "
            stack_used="React.Js | Bootstrap"
            description="Developed an single page web app using React App for Text Utility purpose.
            The app consisted of Converting to Upper case , Lower case , copying the text , clearing text area.
            Further it had the counters for the words , character and time taken for typing the words."
            githublink="https://github.com/neelpopat242/textutil-r"
            weblink="https://neelpopat242.github.io/textutil-r/"

          />

          <ProjectItem
            title="E-commerce"
            stack_used="React.Js | Django"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit
            , sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

            githublink="https://github.com/neelpopat242"
            weblink="https://github.com/neelpopat242"
          />
        </div>
      </div>
    
  );
};

export default Project;
