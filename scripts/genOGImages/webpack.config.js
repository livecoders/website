import path from "path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
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
};