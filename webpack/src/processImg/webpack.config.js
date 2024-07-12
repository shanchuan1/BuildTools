/*
 * @Description: 
 * @Author: shanchuan
 * @Date: 2024-07-12 15:01:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-12 15:19:41
 */
const path = require('path');

module.exports = {
    entry: './src/processImg/index.js',
    output: {
        path: path.resolve(__dirname, '../../dist_img'),
        //  filename: 'main.js', // 输出文件名
    },
    module: {
        rules: [
            // 处理图片资源
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // 匹配图片文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192, // 小于8KB的文件转换为Data URL
                            fallback: 'file-loader',
                            name: '[name].[hash:8].[ext]', // 输出文件名
                            outputPath: 'images/', // 输出目录
                            publicPath: '../images/' // 公共路径
                        }
                    }
                ]
            }
        ]
    }
};