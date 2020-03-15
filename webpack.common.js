/* NOTES:
1. generic libs bundle will be built by gulp - use gulp buildJs (will build libs dev & prod)
2. scss will be built by gulp, webpack makes this process more of a mess than it needs to be
   use gulp buildCss

Available gulp commands:
buildCss buildJs build watchCss
 */

const path = require('path');


module.exports = {
    // devtool: "source-map",
    entry: {
        //name: "source_file_path" path must be specified in output
        //"path to export to and file name [path][name]": "source_file_path"
        app: './src/index.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    // options: {
                    //     presets: ["@babel/preset-env"]
                    // }
                }
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js']
    },

    output: {
        // use path.resolve(__dirname,"path"); if you want to go from project root
        // path: path.resolve(__dirname, 'dist/includes/js'),
        // publicPath: '/',
        // path: path.resolve(__dirname,"./"),
        // filename: '[name]-[hash].bundle.js'
        // filename: '[name].bundle.js'
        path: path.resolve(__dirname, './dist/includes/js'),
        filename: '[name].bundle.js'
    },

    stats: {
        warnings: false
    },

    watch: true
};