/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions: { createPage } }) => {
  const getSiteData = require("./fetchData.ts");
  // `getSiteData` is a function that fetches our data
  const org = await getSiteData.getSiteData("anytimefitnessstaugustinefl");

  // Create a page that will 404 without an organization name in the rouote
  createPage({
    path: `/`,
    component: require.resolve("./src/pages/404.tsx"),
    context: {},
  });
  // Create a page that lists all routes (index.html).
  createPage({
    path: `/${org.name}`,
    component: require.resolve("./src/templates/Basic.tsx"),
    context: { org },
  });

  // Create a page for each route, depending on layout
  org.routes.forEach(route => {
    createPage({
      path: `/${org.name}/${route.name}/`,
      matchPath: "/:organization/:route",
      component: require.resolve("./src/templates/Basic.tsx"),
      context: { org, currentRoute: route.name },
    });
  });
};
