import React from "react";
import moment from "moment";
import { useRouteData } from "react-static";

export default function ActivityFeed() {
  const { commits, codeWarsUser, codeWarsData, devToData } = useRouteData();
  console.log(codeWarsData);

  return (
    <div className="activity">
      <div className="activity__codeWars-devto">
        <div className="activity__codeWars">
          <h2 className="activity__h2">Codewars Activity</h2>

          <div className="activity__codeWars-data">
            <div className="activity__codeWars-card activity__codeWars-card--user">
              <h4>{codeWarsUser.username}</h4>
              <div>{codeWarsUser.honor} honor</div>
              <a href="https://www.codewars.com/users/Robp773/completed_solutions">View Solutions</a>
            </div>
            {codeWarsData.data.map((challenge, index) => {
              return (
                <div className="activity__codeWars-card" key={index}>
                  <h4>
                    <a
                      target="#"
                      href={`http://www.codewars.com/kata/${challenge.slug}`}
                    >
                      {challenge.name}
                    </a>
                  </h4>
                  <div>
                    {challenge.completedLanguages.map((language, index) => {
                      return <span key={index}>{language}</span>;
                    })}
                  </div>
                  <div>
                    {moment(challenge.completedAt).format("M/D/YYYY h:mm A")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="activity__devto">
          <h2 className="activity__h2">DevTo Articles</h2>
          <div>
            {devToData.map((post, index) => {
              return (
                <div key={index}>
                  <div>{post.title}</div>
                  <img alt={`${post.title} cover`} src={post.cover_image} />
                  <div>
                    {post.tag_list.map((tag, index) => {
                      return <span key={index}>{tag}</span>;
                    })}
                  </div>
                  <div>
                    {moment(post.published_timestamp).format("M/D/YYYY h:mm A")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="activity__commits">
        {commits.map((commit, index) => {
          if (commit.payload.commits) {
            return (
              <div key={index}>
                <div>{commit.repo.name}</div>
                <div>{moment(commit.created_at).format("M/D/YYYY h:mm A")}</div>
                <div>
                  {commit.payload.commits.map(commit => {
                    return commit.message;
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
