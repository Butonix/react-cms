const path = require('path')
const paths = require('../config/paths')
const mainWebpackConfig = require('../config/webpack.config.dev')

// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.


// Export a function. Accept the base config as the only param.
module.exports = function(storybookBaseConfig, configType) {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  storybookBaseConfig.resolve.alias = mainWebpackConfig.resolve.alias

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.loaders.push({
    test: /.scss$/,
    loaders: ["style", "css", "sass"],
    include: path.resolve(__dirname, '../')
  });

  // Return the altered config
  return storybookBaseConfig;
};