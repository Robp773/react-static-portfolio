import GitHub from "github-api";
import axios from "axios";

export default async function getGitHubData() {
  var gh = new GitHub({
    token:
      process.env.GITHUB_TOKEN || "ede1f4c85044cc508ecbd0a2231d1983aa3db776"
  });

  let me = gh.getUser();
  return me.getProfile().then(userData => {
    return axios
      .get("https://api.github.com/users/Robp773/events/public")
      .then(events => {
        let repoList = {};
        let filteredCommits = [];

        events.data.map(event => {
          // let s = event.repo.name.substring(event.repo.name.indexOf('/'), event.repo.name.length);
          // console.log(event);
          if (event.payload.commits) {
            event.payload.commits.map(singleCommit => {
              filteredCommits.push({
                repo: event.repo.name,
                singleCommit,
                created_at: event.created_at
              });
              if (event.repo.name in repoList) {
                repoList[event.repo.name] += 1;
              } else {
                repoList[event.repo.name] = 1;
              }
            });
          }
        });

        let repoLabels = Object.keys(repoList);
        let repoVals = [];
        for (let repo in repoList) {
          repoVals.push(repoList[repo]);
        }

        return {
          chartData: {
            datasets: [
              {
                data: repoVals,
                backgroundColor: [
                  "#00a8e8",
                  "#007ea7",
                  "#f3e9d2",
                  "#4363d8",
                  "#f58231",
                  "#911eb4",
                  "#46f0f0",
                  "#f032e6",
                  "#bcf60c",
                  "#fabebe",
                  "#008080",
                  "#e6beff",
                  "#9a6324",
                  "#fffac8",
                  "#800000",
                  "#aaffc3",
                  "#808000",
                  "#ffd8b1",
                  "#000075",
                  "#808080",
                  "#ffffff",
                  "#000000"
                ]
              }
            ],
            labels: repoLabels
          },
          commits: filteredCommits,
          userData: userData.data
        };
      });
  });
}
