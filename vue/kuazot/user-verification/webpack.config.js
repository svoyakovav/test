"use strict";

const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = [
  {
    // mode: 'development',
    mode: "production",
    entry: ["./src/main.js"],
    watch: false,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["vue-style-loader", "css-loader"],
        },
        {
          test: /\.vue$/,
          use: "vue-loader",
        },
        {
          test: /\.s(a|c)ss$/,
          use: ["vue-style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      alias: {
        vue: "vue/dist/vue.js",
        "@": __dirname,
        src: path.resolve(__dirname, "./src/"),
      },
    },
    plugins: [new VueLoaderPlugin()],
    output: {
      path: path.join(__dirname, "./"),
      filename: "user_verification_app.js",
    },
  },
];
