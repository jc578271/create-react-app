import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'
import cssnano from 'cssnano'

const devMode = process.env.NODE_ENV !== 'production'

module.exports = [
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
            },
        ],
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    },
    {
        test: /\.s?css$/i,
        use: [
            { loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader },
            { loader: 'css-loader', options: { sourceMap: !devMode } },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                    plugins: () => [postcssImport, postcssPresetEnv, cssnano],
                },
            },
            { loader: 'sass-loader', options: { sourceMap: true } }
        ]
    },
    {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'file-loader'
    },
    {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        exclude: /node_modules/,
        loader: 'url-loader?prefix=font/&limit=5000&name=[hash].[ext]&outputPath=/fonts/'
    },
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[hash].[ext]&outputPath=/fonts/'
    },
    {
        test: /\.(png|jpe?g|gif|svg|webp|tiff)(\?.*)?$/i,
        use: ['url-loader?limit=10000&name=[hash].[ext]&outputPath=/images/', 'img-loader']
    },
    {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
            {
                loader: 'url-loader',
                options: { limit: 10000, name: '[name].[ext]', outputPath: '/audio/' },
            },
        ],
    }
];