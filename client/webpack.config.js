var config = {    
    entry : './src/index.jsx',
    output: {
        path: __dirname,
        filename: 'index.min.js'
    },
    devServer: {
        inline :true,
        port: 8081
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000',
                test: /\.jsx?$/,
                loader:    'babel-loader',
                query: {
                    presets: ['es2016', 'react', 'stage-2']
                },
            },
            {
                test: /\.css$/,
                loaders: ['style-loader','css-loader' ],
            }
        ]
    },
    node: {
            fs: 'empty',
            net: 'empty'
    }
};
module.exports = config;