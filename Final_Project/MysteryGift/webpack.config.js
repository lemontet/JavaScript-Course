const DotEnv = require("dotenv-webpack");

// Create and export a config object
  // Entry
  // Output
  // Mode (defined in package.json scripts)
  // Module Rules (loaders)

console.log(process.env);

const config = {
  entry: ["./app/js/index.js"],
  output: {
    path: __dirname + "/dist", // What directory do you want to add this bundle to?
    // __dirname represents the current directory we're in
    publicPath: "/",
    filename: "bundle.js" // I want you to create a bundle.js file, and for it to end up in the dist directory
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // Exclude any js files in the node_modules folder
        loader: ["babel-loader"]  // Use the babel-loader
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new DotEnv()],
  devServer: {
    contentBase: "./dist"
  }
};

module.exports = config;