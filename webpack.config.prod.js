var webpack = require('webpack')
var path = require('path')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

process.noDeprecation = true

var config = {
	entry: {
		'camera-proxy.min': ['./src/index.ts'],
		// AnimatedCameraProxy: ['./src/AnimatedCameraProxy.ts'],
		// CameraProxy: ['./src/CameraProxy.ts'],
		// PointerControl: ['./src/PointerControl.ts'],
		// RemoteSyncer: ['./src/RemoteSyncer.ts'],
		// TouchControl: ['./src/TouchControl.ts'],
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
		three: 'three',
		// 'three/src/math/Vector3': {
		// 	commonjs: 'three/src/math/Vector3',
		// 	commonjs2: 'three/src/math/Vector3',
		// 	amd: 'three/src/math/Vector3',
		// 	root: 'THREE.Vector3',
		// },
		// 'three/src/math/Euler': {
		// 	commonjs: 'three/src/math/Euler',
		// 	commonjs2: 'three/src/math/Euler',
		// 	amd: 'three/src/math/Euler',
		// 	root: 'THREE.Euler',
		// },
		'paho-mqtt': 'paho-mqtt',
	},
	mode: 'production',
	// stats: 'normal',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		new ProgressBarPlugin({ width: 30 }),
		new webpack.NoEmitOnErrorsPlugin(), // 出错时不发布
		// new BundleAnalyzerPlugin(),
	],
	devtool: 'source-map',
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
				use: {
					loader: 'ts-loader',
					options: {
						compilerOptions: {
							declaration: false,
						},
					},
				},
			},
		],
	},
}

module.exports = config
