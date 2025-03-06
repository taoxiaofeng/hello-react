const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'], // 这里你可以将常用的库添加到 DLL 中
  },
  output: {
    path: path.resolve(__dirname, 'dll'), // 输出 DLL 文件的路径
    filename: '[name].dll.js', // DLL 文件的名字
    library: '[name]_dll', // DLL 暴露出的全局变量名称
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_dll', // 与上面的 library 对应
      path: path.resolve(__dirname, 'dll/[name].manifest.json'), // 生成的 manifest 文件路径
    }),
  ],
};
