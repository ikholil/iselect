const path = require('path');

module.exports = {
    entry: './src/iselect.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'iselect.min.js',
        library: 'Tdown',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
