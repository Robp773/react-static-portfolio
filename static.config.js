import path from "path";
import getGitHubData from "./src/data-requests/githubData";
import getCodeWarsData from "./src/data-requests/codeWarsData";
import getDevToData from "./src/data-requests/dev.to";

import fs from "fs";
import klaw from "klaw";
import matter from "gray-matter";

function getPosts(folder) {
  const items = [];
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () =>
    new Promise(resolve => {
      // Check if test-collect directory exists //
      // This is the folder where your CMS collection we made earlier will store it's content. Creating a post inside this collection will add a "test-collection" directory to your repo for you.
      if (fs.existsSync(`./src/cms/${folder}`)) {
        klaw(`./src/cms/${folder}`)
          .on("data", item => {
            // Filter function to retrieve .md files //
            if (path.extname(item.path) === ".md") {
              // If markdown file, read contents //
              const data = fs.readFileSync(item.path, "utf8");
              // Convert to frontmatter object and markdown content //
              const dataObj = matter(data);
              // Create slug for URL //
              dataObj.data.slug = dataObj.data.title
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
              // Remove unused key //
              delete dataObj.orig;
              // Push object into items array //
              items.push(dataObj);
            }
          })
          .on("error", e => {
            console.log(e);
          })
          .on("end", () => {
            // Resolve promise for async getRoutes request //
            // posts = items for below routes //
            resolve(items);
          });
      } else {
        // If src/posts directory doesn't exist, return items as empty array //
        resolve(items);
      }
    });
  return getFiles();
}

export default {
  getRoutes: async () => {
    const { userData, commits } = await getGitHubData();
    const { codeWarsUser, codeWarsData } = await getCodeWarsData();
    const devToData = await getDevToData();
    // const projects = await getPosts("projects");

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
      },
      {
        path: "/projects",
        // getData: () => ({
        //   projects
        // })
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
