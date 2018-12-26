let glob = require("glob");

let entry = __dirname + "/app/src/page.js";
let outputPath = __dirname + "/dist/";
if (process.env.TESTBUILD) {
  entry = glob.sync(__dirname + "/app/test/**/*.test.js");
  outputPath = __dirname + "/test-dist/";
}

module.exports = {
  entry: entry,
  output: {
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ["/node_modules/"],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["env"],
            },
          },
        ],
      },
    ],
  },
};
