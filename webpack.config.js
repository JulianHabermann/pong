// Declaring paths for upload
const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
    // Path to the main app source
    entry: path.resolve(appDirectory, "src/app.ts"),
    output: {
        filename: "js/pongBundle.js", 
        path: path.resolve(appDirectory, 'public'),
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    // Creating a dev server that updates as content is changed
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        disableHostCheck: true,
        contentBase: path.resolve(appDirectory, "public"),
        publicPath: "/",
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    // Injecting the bundled js code into an html file
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
        }),
        new CleanWebpackPlugin(),
    ],
    mode: "development",
};