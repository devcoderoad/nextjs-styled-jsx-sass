const withSass = require("@zeit/next-sass");
const env = process.env.NODE_ENV;

module.exports = withSass({
  cssLoaderOptions: {
    importLoaders: 2
  },
  ...(env === "development" && { sourceMaps: true })
});
