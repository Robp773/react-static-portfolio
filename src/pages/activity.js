import React from "react";
import moment from "moment";
import { useRouteData } from "react-static";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PieChart from "../components/PieChart";

export default function ActivityFeed() {
  const {
    commits,
    chartData,
    codeWarsUser,
    codeWarsData,
    devToData
  } = useRouteData();
  console.log(chartData);
  return (
    <div className="activity">
      <div className="activity__codeWars-devto">
        <div className="activity__codeWars">
          <h2 className="activity__h2">
            Codewars - Recent Challenges
            <img
              className="activity__codeWars-totals"
              alt="CodeWars Badge"
              src="https://www.codewars.com/users/Robp773/badges/large"
            />
          </h2>

          <div className="activity__codeWars-data">
            <Carousel
              showThumbs={false}
              interval={4000}
              transitionTime={1000}
              autoPlay
              infiniteLoop
              showStatus={false}
              swipeable
              showArrows={false}
              emulateTouch
              stopOnHover={false}
              centerMode
              centerSlidePercentage={33.3}
              showIndicators={false}
            >
              {codeWarsData.data.slice(0, 8).map((challenge, index) => {
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
          <h2 className="activity__h2">DevTo Articles</h2>
          <div className="activity__devto-articles-parent">
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
                    {" "}
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
            <div className="activity__devto-article-wrapper activity__devto-article-wrapper--even">
              <div className="activity__devto-article">
                <h4 className="activity__devto-article-h4">
                  More Coming Soon...
                </h4>
              </div>
            </div>{" "}
            <div className="activity__devto-article-wrapper">
              <div className="activity__devto-article">
                <h4 className="activity__devto-article-h4">
                  More Coming Soon...
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="activity__commits">
        <h2 className="activity__h2">Recent Commits (Public Only)</h2>
        <PieChart chartData={chartData} />
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
