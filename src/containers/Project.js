import React from "react";
import { useRouteData } from "react-static";
import { Link } from "components/Router";
import { Carousel } from "react-responsive-carousel";
import backBtn from "../images/go-back-arrow.png";
const ReactMarkdown = require("react-markdown");

export default function Project() {
  const { project } = useRouteData();
  console.log(project);
  return (
    <div className="single-project">
      <div className="single-project__container">
        <Link className="single-project__back-btn" to="/projects">
          <img src={backBtn} />
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
              onClickItem={function test(e){console.log(e)}}

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
