import React from "react";
import { useRouteData } from "react-static";
import { Link } from "components/Router";
import { Carousel } from "react-responsive-carousel";
import backBtn from "../images/go-back-arrow.png";
const ReactMarkdown = require("react-markdown");
import chains from "../images/chains.png";

export default function Project() {
  const { project } = useRouteData();
  console.log("loading");
  return (
    <div className="single-project">
      <div className="single-project__container">
        <Link className="single-project__back-btn" to="/apps">
          <img alt="back button" src={backBtn} />
        </Link>
        <h1>{project.title}</h1>
        <div>
          <div className="single-project__carousel-parent">
            <Carousel
              className="single-project__desktop-carousel"
              showThumbs={false}
              interval={5000}
              transitionTime={1000}
              autoPlay
              infiniteLoop
              showStatus={false}
              swipeable
              showArrows={true}
              emulateTouch
              onClickItem={function test(e) {
                console.log(e);
              }}
              stopOnHover={false}
              showIndicators={false}
            >
              {project["desktop-screenshots"].map((screenshot, index) => {
                return <img key={index} src={screenshot} />;
              })}
            </Carousel>
            <Carousel
              className="single-project__mobile-carousel"
              showThumbs={false}
              interval={5000}
              transitionTime={1000}
              autoPlay
              infiniteLoop
              axis="vertical"
              showStatus={false}
              swipeable
              showArrows={true}
              emulateTouch
              stopOnHover={false}
              showIndicators={false}
            >
              {project["mobile-screenshots"].map((screenshot, index) => {
                return <img key={index} src={screenshot} />;
              })}
            </Carousel>
          </div>
          <div className="single-project__live-link-container">
            <a
              target="#"
              href={
                project["live-link"] === "private" ? null : project["live-link"]
              }
            >
              {project["live-link"] === "private" ? (
                "Live link is private"
              ) : (
                <span>
                  Live Link
                  <img
                    className="single-project__link-img"
                    alt="link icon"
                    src={chains}
                  />
                </span>
              )}
            </a>
          </div>
          <div className="single-project__repo-links">
            <h4>Repositories</h4>
            {project["repo-links"].map((repo, index) => {
              return (
                <span className="single-project__link" key={index}>
                  <a
                    target="#"
                    href={
                      repo["repo-url"] === "private" ? null : repo["repo-url"]
                    }
                  >
                    {`${
                      repo["repo-url"] === "private"
                        ? `${repo["repo-name"]} repo is private`
                        : repo["repo-name"]
                    }`}
                    {repo["repo-url"] === "private" ? null : (
                      <img
                        className="single-project__link-img"
                        alt="link icon"
                        src={chains}
                      />
                    )}
                  </a>
                </span>
              );
            })}
          </div>

          <div className="single-project__tech">
            {project.tech.map((tech, index) => {
              return <span key={index}>{tech}</span>;
            })}
          </div>

          <div className="single-project__desc">
            {<ReactMarkdown source={project["full-description"]} />}
          </div>
        </div>
      </div>
    </div>
  );
}
