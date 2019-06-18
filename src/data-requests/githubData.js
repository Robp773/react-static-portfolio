import GitHub from "github-api";
import axios from "axios";

export default async function getGitHubData() {
  var gh = new GitHub({
    token: "a164990eca90540396a116e30f0243bb2d5e3273"
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
