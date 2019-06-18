import GitHub from "github-api";
import axios from "axios";

export default async function getGitHubData() {
  var gh = new GitHub({
    token: process.env.GITHUB_TOKEN
  });

  let me = gh.getUser();
  return me.getProfile().then(userData => {
    return axios
      .get("https://api.github.com/users/Robp773/events/public")
      .then(commits => {
        return {
          commits: commits.data,
          userData: userData.data
        };
      });
  });
}
