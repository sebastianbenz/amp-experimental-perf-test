const ampPlugin = require("@ampproject/eleventy-plugin-amp");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(ampPlugin, {
    imageOptimization: true,
    filter: /^.*optimizer.*$/
  });
  eleventyConfig.addPlugin(ampPlugin, {
    imageOptimization: true,
    filter: /^.*experimental.*$/,
    ampRuntimeHost:
      process.env.ENV === "prod"
        ? "https://amp-eleventy-demo.web.app/"
        : "http://localhost:8080",
    downloadAmpRuntime: true,
    validation: false,
    //experimentEsm: true,
    experimentImg: true
  });
  eleventyConfig.addPassthroughCopy("img");
};
