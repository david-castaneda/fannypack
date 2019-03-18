const path = require('path')
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  webpack: (config, options, webpack) => {
    // Perform customizations to config
    // Important: return the modified config

    config.plugins.push(new PrettierPlugin());
    config.resolve.alias = {
      '@lib': path.resolve(__dirname, 'src', 'lib'),
      '@models': path.resolve(__dirname, 'src', 'api', 'db', 'models')
    }

    return config;
  },
};
