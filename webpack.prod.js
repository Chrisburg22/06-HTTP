const HtmlWebPack = require('html-webpack-plugin');// Le inyecta a Html el script del nuevo archivo creado.
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizer =  require('css-minimizer-webpack-plugin');
const Tester = require('terser-webpack-plugin');


module.exports = {
    mode: 'production',

    output: {
        filename: "[name].[contenthash].js"
    },

    module: {// Definir las reglas
        rules: [
            {
                test: /\.html$/, // cada vez que se ejecute eñ build va a barrer cada uno de los archivos del proyecto, cuando encuentre un archivo html le diremos que haga lo siguiente
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /style\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /style\.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            },
            {
                test:  /\.(png|svg|g|gif)$/,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name: 'assets/[name].[ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                         loader: "babel-loader",
                         options: {
                         presets: ['@babel/preset-env']
                         }
                    }
                ]
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer : [
            new CssMinimizer(),
            new Tester(),
        ]
    },

    plugins: [
        new HtmlWebPack( {
            title: 'Mi Webpack App',
            filename: './index.html',
           // filename: 'Hola Mundo'
           template: './src/index.html'// Archivo en el que se va a basar
        } ),
        new MiniCssExtractPlugin( {
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        } ),
        new CopyPlugin ( { //Esto nos ayuda a importar recursos estaticos en este caso fue una imagen
            patterns: [
                { from: 'src/assets/', to: 'assets/' } // El from es de donde viene la imagen y el to es la nueva carpeta que se crea en dist
            ]
        }),
    ]
}