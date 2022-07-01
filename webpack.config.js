const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    // 出力の場所
    // 絶対pathで指定する必要があるのでpathモジュールを利用している
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
};
