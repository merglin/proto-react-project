const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  // absolute path to the base directory (would default to current working directory)
  context: __dirname,
  // a starting point where weback will start traversing js files to understandng deps
  // and put a bundle together, an array of js files can be provided and all will be
  // traversed.
  // one rule one entry point per html page.
  entry: "./src/index.js",
  // options for where the bundles will be built to
  output: {
    // absolute path to the directory where the output bundles will be put.
    path: path.resolve(__dirname, "dist"),
    // for a single entry point see entry above, it can be static string that defines name
    // of the bundle.  For multiple entry points can have templated name like [name].bundle.js
    // which will use the name taken from the entry point and substitute it in for [name]
    filename: "main.js",
    // the public URL of the output directory when referenced from browser
    // in this case the dist directory defined in path will be the root from
    // which all content will be served.
    publicPath: "/",
  },
  // the options used by the webpack dev server
  devServer: {
    // not entirely clear about this but somehow injects some middleware to
    // redirect 404s to the base page of the application.
    historyApiFallback: true,
  },
  // controls how and if source maps are used
  devtool: "inline-source-map",
  // the list of modules to use are part of bundling
  module: {
    // array of rules that are matched to requests when modules are created.
    rules: [
      {
        // all js files will use the projects babel configuration to transpile
        // the result into javascript to be placed in the module.
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        // css-loader allows importing css into modules
        // style-loader configures how styles will be represented, the default being
        // inline css within <style> tags.
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // file-loader allows reference a files as an import and it will be
      // included in the bundle.
      {
        //
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader",
      },
    ],
  },
  // use plugins to apply certain behaviours to the webpack bundling
  plugins: [
    // This plugin is used to specify a base html page in which to inject
    // the bundle data (scripts, css, etc)
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
    }),
  ],
};
