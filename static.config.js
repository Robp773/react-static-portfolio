import path from "path";
import getGitHubData from "./src/data-requests/githubData";
import getCodeWarsData from "./src/data-requests/codeWarsData";
import getDevToData from "./src/data-requests/devToData";
import getProjectData from "./src/data-requests/projectData";

export default {
  getRoutes: async () => {
    const { userData, commits, chartData } = await getGitHubData();
    const { codeWarsUser, codeWarsData } = await getCodeWarsData();
    const devToData = await getDevToData();
    const apps = await getProjectData("projects");
    const sites = await getProjectData("sites");

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
          chartData,
          codeWarsData,
          codeWarsUser,
          devToData
        })
      },
      {
        path: "/apps",
        getData: () => ({
          apps
        }),
        children: apps.map((app, index) => ({
          path: `/${app.data.slug}`,
          template: "src/containers/Project",
          getData: () => ({
            project: app.data
          })
        }))
      },
      {
        path: "/sites",
        getData: () => ({
          sites
        }),
        children: sites.map((site, index) => ({
          path: `/${site.data.slug}`,
          template: "src/containers/Project",
          getData: () => ({
            project: site.data
          })
        }))
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