var webpack = require('webpack')
var path = require('path')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

process.noDeprecation = true

var config = {
	entry: {
		index: ['./src/index.ts'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		libraryTarget: 'umd',
		globalObject: 'this',
	},
	externals: {
		'ani-timeline': 'ani-timeline',
		hammerjs: 'hammerjs',
		// three: 'three',
		'three/src/math/Vector3': {
			commonjs: 'three/src/math/Vector3',
			commonjs2: 'three/src/math/Vector3',
			amd: 'three/src/math/Vector3',
			root: 'THREE.Vector3',
		},
		'three/src/math/Euler': {
			commonjs: 'three/src/math/Euler',
			commonjs2: 'three/src/math/Euler',
			amd: 'three/src/math/Euler',
			root: 'THREE.Euler',
		},
		'paho-mqtt': 'paho-mqtt',
	},
	mode: 'production',
	stats: 'normal',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		new ProgressBarPlugin({ width: 30 }),
		new webpack.NoEmitOnErrorsPlugin(), // 出错时不发布
		new BundleAnalyzerPlugin(),
	],
	resolve: {
		alias: {
			src: path.join(__dirname, 'src'),
		},
		extensions: ['.js', '.css', '.ts'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				include: /src|demo/,
				use: 'ts-loader',
			},
		],
	},
}

module.exports = config
