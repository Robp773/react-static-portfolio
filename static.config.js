import path from "path";
import getGitHubData from "./src/data-requests/githubData";
import getCodeWarsData from "./src/data-requests/codeWarsData";
import getDevToData from "./src/data-requests/dev.to";

export default {
  getRoutes: async () => {
    const { userData, commits } = await getGitHubData();
    const { codeWarsUser, codeWarsData } = await getCodeWarsData();
    const devToData = await getDevToData();

    return [
      {
        path: "/",
        getData: () => ({
          userData
        })
      },
      {
        path: "/activity",
        getData: () => ({
          commits,
          codeWarsData,
          codeWarsUser,
          devToData
        })
      }
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ]
};
