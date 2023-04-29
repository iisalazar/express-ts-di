const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    index: "./src/server.ts",
  },

  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  externals: [nodeExternals()],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
};
