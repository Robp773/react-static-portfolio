import React from "react";
import { useRouteData } from "react-static";

export default function Apps() {
  let { apps } = useRouteData();

  return (
    <div className="apps">
      <div className="apps__container">
        {apps.map((project, index) => {
          return (
            <a
              href={`/apps/${project.data.slug}`}
              key={index}
              className="apps__card"
            >
              <h3>{project.data.title}</h3>

              <img src={project.data["desktop-screenshots"][0]} />

              <div className="apps__tech-parent">
                {project.data.tech.map((tech, index) => {
                  return (
                    <div className="apps__tech-name" key={index}>
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
