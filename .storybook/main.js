const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: [
    "storybook-addon-designs",
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-essentials"
  ],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.module.scss$/,
      use: ["style-loader", "css-loader?modules&importLoaders", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        }
      }
    };
  },
};
