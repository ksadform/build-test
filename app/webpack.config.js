const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const {join} = require('path')

module.exports = {
    entry: './src/index.js',
    mode: "production",

    optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
     
    
    output: {
        path: join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/',
        
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: './src/index.html'
      })
  ],
     module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env',{ targets: "defaults" }], ['@babel/preset-react',{runtime:"automatic"}]]
                        }
                }
            }
        ]
  },
     devServer: {
        hot: true,
        port: 3000,
        open:true,
  },
     
};