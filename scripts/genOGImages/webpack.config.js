const path = require("path")

module.exports = {
  entry: "./src/image.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "image.js",
  },
  module: {
    rules: [
      {
        test: /src\/.+\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
}
