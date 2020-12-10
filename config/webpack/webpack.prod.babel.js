import {CleanWebpackPlugin} from 'clean-webpack-plugin';

import paths from './paths';

module.exports = {
    mode: 'production',
    output: {
        filename: `${paths.jsFolder}/[name].js`,
        path: paths.outputPath,
        chunkFilename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    devtool: 'source-map'
};