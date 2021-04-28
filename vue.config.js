const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
module.exports = {
    publicPath: './', //修改打包根路径
    // 配置webpack-dev-server
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        hotOnly: true, // 热加载
        // 本地node代理
        proxy: {
            '/api': { // 将 /api 替换为 target：指定的url
                target: 'http://www.api.com/',
                changeOrigin: true, // true，启用跨域
                pathRewrite: {
                    '^/api': '' // 要转发到的地址
                }
            }
        }
    },
    // 配置网页logo
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
    // 打包编译优化
    // 去除 .map 文件
    productionSourceMap: false,
    chainWebpack: config => {
        if (IS_PROD) {
            config.module
                .rule("images")
                .use("image-webpack-loader")
                .loader("image-webpack-loader")
                .options({
                    mozjpeg: { progressive: true, quality: 65 },
                    optipng: { enabled: false },
                    pngquant: { quality: [0.65, 0.9], speed: 4 },
                    gifsicle: { interlaced: false }
                    // webp: { quality: 75 }
                });
        }
        config.plugins.delete('prefetch')
    },
    // 代码压缩
    configureWebpack: config => {
        const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
        config.plugins.push(
            new UglifyJsPlugin({
                uglifyOptions: {
                    //生产环境自动删除console
                    compress: {
                        drop_debugger: true,
                        drop_console: true,
                        pure_funcs: ['console.log']
                    }
                },
                sourceMap: false,
                parallel: true
            })
        )
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({
                        rootValue: 37.5, //换算基数 设计稿750宽就给75，设计稿375宽，就给37.5
                        exclude: /(node_module)/,  //node_module内的px不转换
                        mediaQuery: false,  //（布尔值）允许在媒体查询中转换px。
                        minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
                    }),
                ]
            }
        }
    },
}