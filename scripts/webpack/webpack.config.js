module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                }
            ]
    }
    ,    devtool: 'source-map'
}