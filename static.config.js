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
    const projects = await getProjectData("projects");

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
        path: "/projects",
        getData: () => ({
          projects
        }),
        children: projects.map((project, index) => ({
          path: `/${project.data.slug}`,
          template: "src/containers/Project",
          getData: () => ({
            project: project.data
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