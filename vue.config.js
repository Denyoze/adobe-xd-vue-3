const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	outputDir: "./dist",
	filenameHashing: false,
	chainWebpack: config => {
		config.externals({
			...config.get("externals"),
			uxp: "commonjs2 uxp",
			os: "commonjs2 os"
		});
	},
	configureWebpack: {
		devtool: false,

		output: {
			filename: "main.js",
		},

		plugins: [
			new CopyPlugin({
				patterns: ["plugin"]
			}),
		]
	}
}