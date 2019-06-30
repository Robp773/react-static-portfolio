import React from "react";
import { useRouteData } from "react-static";
import { Link } from "components/Router";

export default function Projects() {
  let { projects } = useRouteData();

  return (
    <div className="projects">
      <div className="projects__container">
        {projects.map((project, index) => {
          return (
            <a
              href={`/projects/${project.data.slug}`}
              key={index}
              className="projects__card"
            >
              <h3>{project.data.title}</h3>

              <img src={project.data["desktop-screenshots"][0]} />
            
              <div className="projects__tech-parent">
                {project.data.tech.map((tech, index) => {
                  return (
                    <div className="projects__tech-name" key={index}>
                      {tech}
                    </div>
                  );
                })}
              </div>

              <div>{project.data.brief}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
