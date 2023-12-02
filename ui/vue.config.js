const webpack = require("webpack");

module.exports = {
  devServer: {
    port: 8081,
  },
  transpileDependencies: [
    "vuetify"
  ],
  pwa: {
    name: 'Wg Gen Web',
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  }
};
