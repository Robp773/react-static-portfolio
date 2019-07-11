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
    const apps = await getProjectData("apps");
    const sites = await getProjectData("sites");
    const shenanigans = await getProjectData("shenanigans");

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
          devToData,
          shenanigans
        }),
        children: shenanigans.map((shenanigan, index) => ({
          path: `/shenanigans/${shenanigan.data.slug}`,
          template: "src/containers/Project",
          getData: () => ({
            project: shenanigan.data,
            type: shenanigan.type
          })
        }))
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
            project: app.data,
            type: app.type
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
            project: site.data,
            type: site.type
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
