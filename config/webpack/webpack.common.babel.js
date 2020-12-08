import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import paths from './paths';
import rules from './rules';

module.exports = {
    entry: paths.entryPath,
    module: { rules },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `/${paths.cssFolder}/[name].css`,
            chunkFilename: '[id].css',
        }),
        new webpack.ProgressPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: paths.templatePath,
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyURLs: true,
                removeComments: true,
                removeAttributeQuotes: true
            }
        }),
        new CopyWebpackPlugin([
            {
                from: 'public',
                ignore: ['index.html']
            }
        ])
    ]
};