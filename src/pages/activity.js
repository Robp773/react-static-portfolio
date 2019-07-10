import React from "react";
import moment from "moment";
import { useRouteData } from "react-static";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PieChart from "../components/PieChart";

export default function ActivityFeed() {
  const { commits, chartData, codeWarsData, devToData } = useRouteData();
  return (
    <div className="activity">
      <div className="activity__codeWars-devto">
        <div className="activity__codeWars">
          <h2 className="activity__h2">Codewars</h2>

          <div className="activity__codeWars-data">
            <Carousel
              className="activity__codeWars-carousel"
              showThumbs={false}
              interval={4000}
              transitionTime={1000}
              autoPlay
              infiniteLoop
              showStatus={false}
              swipeable
              showArrows={false}
              emulateTouch
              centerMode
              centerSlidePercentage={33.33}
              showIndicators={false}
            >
              {codeWarsData.data.map((challenge, index) => {
                return (
                  <a
                    key={index}
                    target="#"
                    className="activity__codeWars-card"
                    href={`http://www.codewars.com/kata/${challenge.slug}`}
                  >
                    <div>
                      <h4>{challenge.name}</h4>
                      <div>
                        {challenge.completedLanguages.map((language, index) => {
                          return (
                            <span key={index}>{language.toUpperCase()}</span>
                          );
                        })}
                      </div>
                      <div>
                        {moment(challenge.completedAt).format(
                          "M/D/YYYY h:mm A"
                        )}
                      </div>
                    </div>
                  </a>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div className="activity__devto">
          <h2 className="activity__h2">Articles</h2>
          <Carousel
            className="activity__codeWars-carousel"
            showThumbs={false}
            interval={4000}
            transitionTime={1000}
            autoPlay
            infiniteLoop
            showStatus={false}
            swipeable
            showArrows={false}
            emulateTouch
            centerMode
            centerSlidePercentage={33.33}
            showIndicators={false}
          >
            {devToData.map((post, index) => {
              return (
                <div
                  key={index}
                  className={`activity__devto-article-wrapper ${
                    index % 2 === 0
                      ? "activity__devto-article-wrapper--even"
                      : null
                  }`}
                >
                  <a
                    className="activity__devto-article-read-btn"
                    target="#"
                    href={post.url}
                  >
                    <img
                      className="activity__devto-article-img"
                      alt={`${post.title} cover`}
                      src={post.cover_image}
                    />
                    <div className="activity__devto-article" key={index}>
                      <h4 className="activity__devto-article-h4">
                        {post.title}
                      </h4>

                      <div className="activity__devto-article-tags">
                        {post.tag_list.map((tag, index) => {
                          return <span key={index}>{tag.toUpperCase()}</span>;
                        })}
                      </div>
                      <div className="activity__devto-article-time">
                        {moment(post.published_timestamp).format(
                          "M/D/YYYY h:mm A"
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
            <div className="activity__devto-article-wrapper">
              <div className="activity__devto-article">
                <h4 className="activity__devto-article-h4">
                  More Coming Soon...
                </h4>
              </div>
            </div>
            <div className="activity__devto-article-wrapper">
              <div className="activity__devto-article">
                <h4 className="activity__devto-article-h4">
                  More Coming Soon...
                </h4>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="activity__commits">
        <div className="activity__commits-heading-chart">
          <h2 className="activity__h2">Recent Public Commits</h2>
          <PieChart chartData={chartData} />
        </div>
        <div className="activity__commits-data">
          {commits.map((commit, index) => {
            return (
              <div className="activity__commits-single" key={index}>
                <div>{commit.repo}</div>
                <div className="activity__commits-text">
                  {commit.singleCommit.message}
                </div>
                <div>{moment(commit.created_at).format("M/D/YYYY h:mm A")}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
