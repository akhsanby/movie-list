const path = require("path");

module.exports = {
  images: {
    domains: ["image.tmdb.org"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
