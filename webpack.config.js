const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/iselect.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'iselect.min.js',
        library: 'Iselect',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    mode: 'development',
    devServer: {
        watchFiles: ['src/**/*'],
        hot: true,
        port: 5555,    
      },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }, 
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html' // Fix: Change `directory` to `rootDir`
          })
    ]
};
