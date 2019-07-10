import React from "react";
import { useRouteData } from "react-static";

export default function Sites() {
  let { sites } = useRouteData();

  return (
    <div className="apps">
      <div className="apps__container">
        {sites.map((site, index) => {
          return (
            <a
              href={`/sites/${site.data.slug}`}
              key={index}
              className="apps__card"
            >
              <h3>{site.data.title}</h3>

              <img src={site.data["desktop-screenshots"][0]} />

              <div className="apps__tech-parent">
                {site.data.tech.map((tech, index) => {
                  return (
                    <div className="apps__tech-name" key={index}>
                      {tech}
                    </div>
                  );
                })}
              </div>
              <div>{site.data.brief}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
