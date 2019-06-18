import GitHub from "github-api";
import axios from "axios";

export default async function getGitHubData() {
  var gh = new GitHub({
    token: "c298cec81c24fbc6fad55c13b373ce865ef7a12f"
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
