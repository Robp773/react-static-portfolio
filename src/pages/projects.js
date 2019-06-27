import React from "react";
// import moment from "moment";
import { useRouteData } from "react-static";

export default function Projects() {
  let { projects } = useRouteData();
  console.log(projects);

  return (
    <div className="projects">
      <div>
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <div>{project.data.title}</div>
              <div>
                {project.data["desktop-screenshots"].map(
                  (screenshot, index) => {
                    return <img key={index} src={screenshot} />;
                  }
                )}
              </div>
              <div>
                {project.data["mobile-screenshots"].map((screenshot, index) => {
                  return <img key={index} src={screenshot} />;
                })}
              </div>
              <div>
                {project.data.tech.map((tech, index) => {
                  return <span key={index}>{tech}</span>;
                })}
              </div>
              <div>{project.data.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
