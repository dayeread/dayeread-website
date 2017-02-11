const path = require( 'path' )

module.exports = function() {
	//noinspection JSUnresolvedFunction
	return {
		target: 'web',
		entry: {
			app: path.resolve( __dirname, 'src', 'js', 'app.js' ),
			vendor: path.resolve( __dirname, 'src', 'js', 'vendor.js' )
		},
		output: {
			filename: '[name].bundle.js',
			path: path.resolve( __dirname, 'dist' )
		},
		module: {
			rules: [
				{
					test: /\.js[x]?/,
					exclude: /node_modules/,
					use: [ { loader: 'babel-loader' } ]
				},
				{
					test: /\.scss/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				}
			]
		},
		devtool: 'source-map',
		watch: true,
		stats: 'verbose'
	}
}